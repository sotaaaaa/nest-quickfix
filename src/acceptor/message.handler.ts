import { Socket } from 'net';
import { Injectable, Logger } from '@nestjs/common';
import { Message } from '../message/message';
import { Fields } from '../fields';
import { SessionManager } from '../session/session.manager';
import { RoomManager } from '../services/room.manager';
import { RejectMessage } from '../message/reject.message';
import { AcceptorConfig } from './acceptor.config';
import { FixMetadataExplorer } from '../services/fix.metadata.explorer';
import { SessionConfig } from '../session/session.config';
import { Session } from '../session/session';

/**
 * Handles FIX messages in the Acceptor
 */
@Injectable()
export class AcceptorMessageHandler {
  private readonly logger = new Logger(AcceptorMessageHandler.name);

  constructor(
    private readonly sessionManager: SessionManager,
    private readonly config: AcceptorConfig,
    private readonly metadataExplorer: FixMetadataExplorer,
    private readonly roomManager: RoomManager,
  ) {}

  /**
   * Handles logon messages and creates new sessions
   */
  async handleLogon(socket: Socket, logon: Message): Promise<void> {
    try {
      const { senderCompId, targetCompId } = this.extractCompIds(logon);
      
      if (!await this.validateLogon(logon)) {
        this.logger.warn(`Invalid logon attempt from ${senderCompId}`);
        this.sendReject(socket, logon, 'Invalid credentials');
        return;
      }

      let session = this.sessionManager.getSession(senderCompId, targetCompId);

      if (!session) {
        session = await this.createNewSession(socket, logon);
        await this.setupSessionHandlers(session);
        await session.handleMessage(logon);
      }
    } catch (error) {
      this.logger.error('Error handling logon:', error);
      socket.destroy();
    }
  }

  /**
   * Handles non-logon messages
   */
  async handleNonLogonMessage(socket: Socket, message: Message): Promise<void> {
    if (!this.validateRequiredFields(message)) {
      this.logger.error('Message missing required CompID fields');
      return;
    }

    const { senderCompId, targetCompId } = this.extractCompIds(message);
    const session = this.sessionManager.getSession(senderCompId, targetCompId);

    if (!session) {
      this.logger.error(`No session found for ${senderCompId} -> ${targetCompId}`);
      this.sendReject(socket, message, 'Session not found');
      return;
    }

    await session.handleMessage(message);
  }

  /**
   * Creates a new session from logon message
   */
  private async createNewSession(socket: Socket, logon: Message): Promise<Session> {
    const { senderCompId, targetCompId } = this.extractCompIds(logon);
    
    this.logger.debug(`Creating new session for ${senderCompId}->${targetCompId}`);
    
    const sessionConfig: SessionConfig = {
      senderCompId,
      targetCompId,
      heartbeatInterval: parseInt(logon.getField(Fields.HeartBtInt)),
      beginString: this.config.BeginString,
      storeConfig: {
        type: 'memory',
        sessionPrefix: 'fix:session:',
      },
    };

    const session = new Session(
      sessionConfig,
      socket,
      this.roomManager,
      this.sessionManager
    );

    this.sessionManager.registerSession(session);
    return session;
  }

  /**
   * Sets up message handlers for a session
   */
  private async setupSessionHandlers(session: Session): Promise<void> {
    const metadata = this.metadataExplorer.explore();
    
    for (const meta of metadata) {
      if (meta.onLogon) session.registerLogonHandler(meta.onLogon);
      if (meta.onLogout) session.registerLogoutHandler(meta.onLogout);
      if (meta.onConnected) session.registerConnectedHandler(meta.onConnected);
      if (meta.onDisconnected) session.registerDisconnectedHandler(meta.onDisconnected);
      if (meta.onMessage) {
        session.registerMessageHandler(meta.onMessage.handler, meta.onMessage.msgType);
      }
    }
  }

  /**
   * Validates required message fields
   */
  private validateRequiredFields(message: Message): boolean {
    return message.hasField(Fields.SenderCompID) && 
           message.hasField(Fields.TargetCompID);
  }

  /**
   * Extracts sender and target CompIDs from message
   */
  private extractCompIds(message: Message): { senderCompId: string; targetCompId: string } {
    return {
      senderCompId: message.getField(Fields.SenderCompID),
      targetCompId: message.getField(Fields.TargetCompID),
    };
  }

  /**
   * Sends reject message to socket
   */
  private sendReject(socket: Socket, message: Message, reason: string): void {
    const reject = new RejectMessage(
      message.getField(Fields.MsgSeqNum),
      reason,
      message.getField(Fields.MsgType),
    );
    socket.write(reject.toString());
  }

  /**
   * Validates logon credentials if auth is configured
   */
  private async validateLogon(message: Message): Promise<boolean> {
    if (!this.config?.auth) return true;

    const account = message.getField(Fields.Account);
    const password = message.getField(Fields.Password);
    const senderCompId = message.getField(Fields.SenderCompID);

    const isValid = await this.config.auth.validateCredentials(account, password);
    if (!isValid) {
      this.logger.error(`Invalid credentials for ${senderCompId}`);
      return false;
    }

    const allowedSenderCompIds = await this.config.auth.getAllowedSenderCompIds(account);
    if (!allowedSenderCompIds.includes(senderCompId)) {
      this.logger.error(`SenderCompID ${senderCompId} not allowed for ${account}`);
      return false;
    }

    return true;
  }
}
