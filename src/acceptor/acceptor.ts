import { EventEmitter } from 'events';
import { Server, Socket, createServer } from 'net';
import { Logger } from '@nestjs/common';
import { DiscoveryService, MetadataScanner } from '@nestjs/core';
import { SessionManager } from '../session/session.manager';
import { RoomManager } from '../services/room.manager';
import { AcceptorConfig } from './acceptor.config';
import { Message } from '../message/message';
import { Fields, MsgType } from '../fields';
import { AcceptorEvents } from '../constants/events.constant';
import { FIXMessageParser } from '../message/fix.message.parser';
import { AcceptorMessageHandler } from './message.handler';
import { FixMetadataExplorer } from '../services/fix.metadata.explorer';

/**
 * FIX Acceptor implementation
 * Manages incoming FIX connections and their associated sessions
 */
export class FIXAcceptor extends EventEmitter {
  private readonly logger = new Logger(FIXAcceptor.name);
  private readonly server: Server;
  private readonly activeSockets: Map<string, Socket> = new Map();
  private readonly messageParser: FIXMessageParser;
  private readonly messageHandler: AcceptorMessageHandler;

  constructor(
    private readonly config: AcceptorConfig,
    discoveryService: DiscoveryService,
    metadataScanner: MetadataScanner,
    private readonly roomManager: RoomManager,
    private readonly sessionManager: SessionManager,
  ) {
    super();
    this.messageParser = new FIXMessageParser();
    this.messageHandler = this.createMessageHandler(discoveryService, metadataScanner);
    this.server = this.createServer();
    
    this.setupErrorHandling();
    this.start().catch(this.handleStartError);
  }

  /**
   * Starts the acceptor server
   */
  async start(): Promise<void> {
    const { port, host } = this.config.application.tcp;
    
    return new Promise((resolve, reject) => {
      this.server.listen(port, host, () => {
        this.logger.log(`FIX Acceptor started on ${host}:${port}`);
        this.emit(AcceptorEvents.STARTED, { port, host });
        resolve();
      });

      this.server.on('error', (error) => {
        this.emit(AcceptorEvents.ERROR, error);
        reject(error);
      });
    });
  }

  /**
   * Stops the acceptor and all sessions
   */
  async stop(): Promise<void> {
    try {
      await this.sessionManager.closeAll();
      await this.closeAllSockets();
      await this.closeServer();
      this.emit(AcceptorEvents.STOPPED);
      this.logger.log('FIX Acceptor stopped');
    } catch (error) {
      this.logger.error('Error stopping FIX Acceptor:', error);
      throw error;
    }
  }

  /**
   * Gets the session manager instance
   */
  getSessionManager(): SessionManager {
    return this.sessionManager;
  }

  private createMessageHandler(
    discoveryService: DiscoveryService,
    metadataScanner: MetadataScanner,
  ): AcceptorMessageHandler {
    const metadataExplorer = new FixMetadataExplorer(discoveryService, metadataScanner);
    return new AcceptorMessageHandler(
      this.sessionManager,
      this.config,
      metadataExplorer,
      this.roomManager,
    );
  }

  private createServer(): Server {
    const server = createServer((socket) => this.handleNewConnection(socket));
    server.on('error', (error) => this.emit(AcceptorEvents.ERROR, error));
    return server;
  }

  private setupErrorHandling(): void {
    this.on(AcceptorEvents.ERROR, (error) => {
      this.logger.error('FIX Acceptor error:', error);
    });
  }

  private handleStartError = (error: Error): void => {
    this.logger.error('Failed to start FIX Acceptor:', error);
  };

  private async closeAllSockets(): Promise<void> {
    for (const socket of this.activeSockets.values()) {
      socket.destroy();
    }
    this.activeSockets.clear();
  }

  private async closeServer(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.server.close(() => resolve());
    });
  }

  private handleNewConnection(socket: Socket): void {
    const remoteAddress = `${socket.remoteAddress}:${socket.remotePort}`;
    this.activeSockets.set(remoteAddress, socket);
    this.logger.log(`New connection from ${remoteAddress}`);

    this.setupSocketEventHandlers(socket, remoteAddress);
  }

  private setupSocketEventHandlers(socket: Socket, remoteAddress: string): void {
    socket.on('data', (data) => this.handleIncomingData(socket, data));

    socket.on('close', () => {
      this.activeSockets.delete(remoteAddress);
      this.logger.log(`Connection closed from ${remoteAddress}`);
      this.cleanupSocketSessions(socket);
    });

    socket.on('error', (error) => {
      this.logger.error(`Socket error from ${remoteAddress}:`, error);
      this.emit(AcceptorEvents.ERROR, error);
    });
  }

  private async handleIncomingData(socket: Socket, data: Buffer): Promise<void> {
    try {
      const messages = this.messageParser.processData(data);
      for (const message of messages) {
        await this.processMessage(socket, message);
      }
    } catch (error) {
      this.handleDataError(error, socket);
    }
  }

  private async processMessage(socket: Socket, message: Message): Promise<void> {
    if (!this.validateMessage(message)) {
      this.logger.error('Invalid message received: missing MsgType field');
      return;
    }

    const msgType = message.getField(Fields.MsgType);
    this.logIncomingMessage(message);

    try {
      if (msgType === MsgType.Logon) {
        await this.messageHandler.handleLogon(socket, message);
      } else {
        await this.messageHandler.handleNonLogonMessage(socket, message);
      }
    } catch (error) {
      this.logger.error('Error processing message:', error);
    }
  }

  private validateMessage(message: Message): boolean {
    return message.hasField(Fields.MsgType);
  }

  private logIncomingMessage(message: Message): void {
    const sessionId = this.getMessageSessionId(message);
    const rawMessage = message.toString().replace(/\x01/g, '|');
    Logger.debug(`[${sessionId}] IN: ${rawMessage}`);
  }

  private getMessageSessionId(message: Message): string {
    return `${message.getField(Fields.SenderCompID)}->${message.getField(Fields.TargetCompID)}`;
  }

  private handleDataError(error: Error, socket: Socket): void {
    this.logger.error('Error processing incoming data:', error);
    this.emit(AcceptorEvents.ERROR, error);
    socket.destroy();
  }

  private cleanupSocketSessions(socket: Socket): void {
    try {
      const sessions = this.sessionManager.getAllSessions();
      for (const session of sessions) {
        if (session.getSocket() === socket) {
          const sessionId = session.getSessionId();
          this.logger.debug(`Cleaning up session ${sessionId}`);
          session.handleDisconnect();
          this.sessionManager.removeSession(sessionId);
        }
      }
    } catch (error) {
      this.logger.error('Error cleaning up socket sessions:', error);
    }
  }
}
