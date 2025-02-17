import { RoomManager } from './../services/room.manager';
import { EventEmitter } from 'events';
import { Server, Socket, createServer } from 'net';
import { SessionManager } from '../session/session.manager';
import { AcceptorConfig } from './acceptor.config';
import { Message } from '../message/message';
import { Fields, MsgType } from '../fields';
import { AcceptorEvents } from '../constants/events.constant';
import { FIXMessageParser } from '../message/fix.message.parser';
import { Logger } from '@nestjs/common';
import { DiscoveryService, MetadataScanner } from '@nestjs/core';
import { AcceptorMessageHandler } from './message.handler';
import { FixMetadataExplorer } from '../services/fix.metadata.explorer';

/**
 * FIX Acceptor implementation
 * Manages incoming FIX connections and their associated sessions
 */
export class FIXAcceptor extends EventEmitter {
  private server: Server;
  private activeSockets: Map<string, Socket> = new Map();
  private messageParser: FIXMessageParser;
  private messageHandler: AcceptorMessageHandler;

  constructor(
    private readonly config: AcceptorConfig,
    discoveryService: DiscoveryService,
    metadataScanner: MetadataScanner,
    private readonly roomManager: RoomManager,
    private readonly sessionManager: SessionManager,
  ) {
    super();
    this.messageParser = new FIXMessageParser();

    // Create the metadata explorer
    const metadataExplorer = new FixMetadataExplorer(
      discoveryService,
      metadataScanner,
    );

    // Create the message handler
    this.messageHandler = new AcceptorMessageHandler(
      this.sessionManager,
      config,
      metadataExplorer,
      roomManager
    );

    this.setupErrorHandling();
    this.setupServer();

    // Auto-start the acceptor
    this.start().catch(this.handleStartError);
  }

  private setupErrorHandling(): void {
    this.on(AcceptorEvents.ERROR, (error) => {
      Logger.error('FIX Acceptor error:', error);
      // Don't throw, just log
    });
  }

  private handleStartError = (error: Error): void => {
    Logger.error('Failed to start FIX Acceptor:', error);
  };

  /**
   * Starts the acceptor server
   */
  async start(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.listen(
        this.config.application.tcp.port,
        this.config.application.tcp.host,
        () => {
          this.handleServerStart();
          resolve();
        },
      );

      this.server.on('error', (error) => {
        this.emit(AcceptorEvents.ERROR, error);
        reject(error);
      });
    });
  }

  private handleServerStart(): void {
    this.emit(AcceptorEvents.STARTED, {
      port: this.config.application.tcp.port,
      host: this.config.application.tcp.host,
    });

    Logger.log(
      `FIX Acceptor started on ${this.config.application.tcp.host}:${this.config.application.tcp.port}`,
    );
  }

  /**
   * Stops the acceptor and all sessions
   */
  async stop(): Promise<void> {
    await this.sessionManager.closeAll();
    await this.closeAllSockets();
    await this.closeServer();
    this.emit(AcceptorEvents.STOPPED);
  }

  private async closeAllSockets(): Promise<void> {
    for (const socket of this.activeSockets.values()) {
      socket.destroy();
    }
  }

  private async closeServer(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.server.close(() => resolve());
    });
  }

  private setupServer(): void {
    this.server = createServer((socket) => {
      this.handleNewConnection(socket);
    });

    this.server.on('error', (error) => {
      this.emit(AcceptorEvents.ERROR, error);
    });
  }

  private handleNewConnection(socket: Socket): void {
    const remoteAddress = `${socket.remoteAddress}:${socket.remotePort}`;
    this.activeSockets.set(remoteAddress, socket);
    Logger.log(`New connection from ${remoteAddress}`);

    this.setupSocketEventHandlers(socket, remoteAddress);
  }

  private setupSocketEventHandlers(
    socket: Socket,
    remoteAddress: string,
  ): void {
    socket.on('data', (data) => this.handleIncomingData(socket, data));

    socket.on('close', () => {
      this.activeSockets.delete(remoteAddress);
      Logger.log(`Connection closed from ${remoteAddress}`);
      this.cleanupSocketSessions(socket);
    });

    socket.on('error', (error) => {
      Logger.error(`Error on connection from ${remoteAddress}: ${error}`);
      this.emit(AcceptorEvents.ERROR, error);
    });
  }

  private async handleIncomingData(
    socket: Socket,
    data: Buffer,
  ): Promise<void> {
    try {
      const messages = this.messageParser.processData(data);
      for (const message of messages) {
        await this.processMessage(socket, message);
      }
    } catch (error) {
      this.handleDataError(error, socket);
    }
  }

  private async processMessage(
    socket: Socket,
    message: Message,
  ): Promise<void> {
    if (!message.hasField(Fields.MsgType)) {
      Logger.error('Message missing MsgType field');
      return;
    }

    // Log the exact message being sent
    const msgType = message.getField(Fields.MsgType);
    const rawMessage = message.toString();
    const sessionId = `${message.getField(Fields.SenderCompID)}->${message.getField(Fields.TargetCompID)}`;
    Logger.debug(`[${sessionId}] IN: ${rawMessage.replace(/\x01/g, '|')}`);

    // Handle the message
    if (msgType === MsgType.Logon) {
      await this.messageHandler.handleLogon(socket, message);
    } else {
      await this.messageHandler.handleNonLogonMessage(socket, message);
    }
  }

  private handleDataError(error: Error, socket: Socket): void {
    Logger.error('Error processing incoming data:', error);
    this.emit(AcceptorEvents.ERROR, error);
    socket.destroy();
  }

  private cleanupSocketSessions(socket: Socket): void {
    try {
      const sessions = this.sessionManager.getAllSessions();

      for (const session of sessions) {
        if (session.getSocket() === socket) {
          const sessionId = session.getSessionId();
          Logger.debug(`Cleaning up session ${sessionId} due to socket close`);

          session.handleDisconnect();
          this.sessionManager.removeSession(sessionId);
        }
      }
    } catch (error) {
      Logger.error('Error cleaning up socket sessions:', error);
    }
  }

  public getSessionManager(): SessionManager {
    return this.sessionManager;
  }
}
