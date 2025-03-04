import { LogoutMessage } from './../protocol/messages/logout';
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
import { FixDateFormat } from '../common/date/fix.date';

/**
 * Handles FIX messages in the Acceptor
 * Responsible for:
 * - Handling logon/non-logon messages
 * - Managing sessions
 * - Validating messages
 * - Setting up message handlers
 */
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
   * Flow:
   * 1. Validate logon message
   * 2. Create new session if valid
   * 3. Setup handlers
   * 4. Process logon message
   */
  async handleLogon(socket: Socket, message: Message): Promise<void> {
    try {
      await this.validateAndHandleLogon(socket, message);
    } catch (error) {
      this.logger.error('Error handling logon:', error);
      socket.destroy();
      throw error;
    }
  }

  /**
   * Handles non-logon messages by routing them to appropriate session
   * If no session exists, sends logout message and closes connection
   */
  async handleNonLogonMessage(socket: Socket, message: Message): Promise<void> {
    const sessionId = this.buildSessionId(message);
    const session = this.sessionManager.getSessionById(sessionId);

    if (!session) {
      await this.handleNoSessionFound(socket, message, sessionId);
      return;
    }

    return session.handleMessage(message);
  }

  /**
   * Creates a new session from logon message with proper configuration
   */
  private async createNewSession(
    socket: Socket,
    logon: Message,
  ): Promise<Session> {
    const { senderCompId, targetCompId } = this.extractCompIds(logon);

    this.logger.debug(
      `Creating new session for ${senderCompId}->${targetCompId}`,
    );

    // Build session config
    const sessionConfig = this.buildSessionConfig(
      logon,
      senderCompId,
      targetCompId,
    );
    const session = new Session(
      sessionConfig,
      socket,
      this.roomManager,
      this.sessionManager,
    );

    // Register session with session manager
    this.sessionManager.registerSession(session);

    return session;
  }

  /**
   * Sets up all message handlers for a session based on metadata
   */
  protected async setupSessionHandlers(session: Session): Promise<void> {
    const metadata = this.metadataExplorer.explore();

    metadata.forEach((meta) => {
      this.registerSessionHandlers(session, meta);
    });
  }

  /**
   * Extracts sender and target CompIDs from message
   */
  private extractCompIds(message: Message): {
    senderCompId: string;
    targetCompId: string;
  } {
    return {
      senderCompId: message.getField(Fields.SenderCompID),
      targetCompId: message.getField(Fields.TargetCompID),
    };
  }

  /**
   * Sends reject message to socket with given reason
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
   * Validates logon message by checking:
   * 1. Required fields
   * 2. Authentication (if configured)
   * 3. Allowed SenderCompIDs
   */
  private async validateLogon(
    message: Message,
  ): Promise<{ isValid: boolean; message?: string }> {
    this.validateRequiredFields(message); // Validate required fields

    // Check TargetCompID
    const targetCompId = message.getField(Fields.TargetCompID);
    if (targetCompId !== this.config.TargetCompID) {
      this.logger.warn(
        `Invalid TargetCompID received: ${targetCompId}. Expected: ${this.config.TargetCompID}`,
      );
      return { isValid: false, message: 'Invalid TargetCompID' };
    }

    // Skip authentication if not configured
    if (!this.config?.auth) return { isValid: true };

    // Validate authentication
    return this.validateAuthentication(message);
  }

  /**
   * Helper Methods
   */

  private async validateAndHandleLogon(
    socket: Socket,
    message: Message,
  ): Promise<void> {
    try {
      const { isValid, message: errorMsg } = await this.validateLogon(message);

      // If invalid, send logout message and close socket
      if (!isValid) {
        await this.sendLogoutAndClose(
          socket,
          message,
          errorMsg || 'Invalid logon message',
        );
        return;
      }

      // If throw error, send logout message and close socket
    } catch (error) {
      await this.sendLogoutAndClose(socket, message, error.message);
      return;
    }

    const session = await this.createNewSession(socket, message); // Create new session
    await this.setupSessionHandlers(session); // Setup session handlers
    this.setupDisconnectHandler(socket, session); // Setup disconnect handler
    await session.handleMessage(message); // Handle message
  }

  // Setup disconnect handler
  private setupDisconnectHandler(socket: Socket, session: Session): void {
    socket.once('close', () => {
      this.logger.debug(`Socket closed for session ${session.getSessionId()}`);
      session.handleDisconnect();
      this.sessionManager.removeSession(session.getSessionId());
    });
  }

  // Send logout message and close socket
  private async sendLogoutAndClose(
    socket: Socket,
    message: Message,
    reason: string,
  ): Promise<void> {
    const logoutMsg = this.createLogoutMessage(message, reason);
    socket.write(logoutMsg.toString());
    await new Promise((resolve) => setTimeout(resolve, 100));
    socket.destroy();
  }

  private createLogoutMessage(message: Message, reason: string): LogoutMessage {
    const logoutMsg = new LogoutMessage(reason);
    const sendingTime = FixDateFormat.formatDateTime(new Date());

    logoutMsg.setField(
      Fields.SenderCompID,
      message.getField(Fields.TargetCompID),
    );
    logoutMsg.setField(
      Fields.TargetCompID,
      message.getField(Fields.SenderCompID),
    );
    logoutMsg.setField(Fields.BeginString, this.config.BeginString);
    logoutMsg.setField(Fields.MsgSeqNum, 1);
    logoutMsg.setField(Fields.SendingTime, sendingTime);
    return logoutMsg;
  }

  private buildSessionId(message: Message): string {
    const senderCompId = message.getField(Fields.SenderCompID);
    const targetCompId = message.getField(Fields.TargetCompID);
    return `${senderCompId}->${targetCompId}`;
  }

  private async handleNoSessionFound(
    socket: Socket,
    message: Message,
    sessionId: string,
  ): Promise<void> {
    this.logger.warn(`Received message without logon from ${sessionId}`);
    await this.sendLogoutAndClose(
      socket,
      message,
      'Session not logged on. Please logon first.',
    );
  }

  private buildSessionConfig(
    logon: Message,
    senderCompId: string,
    targetCompId: string,
  ): SessionConfig {
    return {
      senderCompId,
      targetCompId,
      heartbeatInterval: parseInt(logon.getField(Fields.HeartBtInt)),
      beginString: this.config.BeginString,
      appName: this.config.application.name,
    };
  }

  private registerSessionHandlers(session: Session, meta: any): void {
    if (meta.onLogon) session.registerLogonHandler(meta.onLogon);
    if (meta.onLogout) session.registerLogoutHandler(meta.onLogout);
    if (meta.onConnected) session.registerConnectedHandler(meta.onConnected);
    if (meta.onDisconnected)
      session.registerDisconnectedHandler(meta.onDisconnected);
    if (meta.onMessage) {
      session.registerMessageHandler(
        meta.onMessage.handler,
        meta.onMessage.msgType,
      );
    }
  }

  private validateRequiredFields(message: Message): void {
    const requiredFields = [
      Fields.SenderCompID,
      Fields.TargetCompID,
      Fields.HeartBtInt,
      Fields.EncryptMethod,
    ];

    for (const field of requiredFields) {
      if (!message.hasField(field)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
  }

  private async validateAuthentication(
    message: Message,
  ): Promise<{ isValid: boolean; message?: string }> {
    const account = message.getField(Fields.Account);
    const senderCompId = message.getField(Fields.SenderCompID);

    // Validate credentials
    const isValid = await this.config.auth.validateCredentials(message);

    if (!isValid) {
      this.logger.error(`Invalid credentials for ${senderCompId}`);
      return { isValid: false, message: 'Invalid credentials' };
    }

    // Check allowed sender comp IDs
    const allowedSenderCompIds =
      await this.config.auth.getAllowedSenderCompIds(account);
    if (!allowedSenderCompIds.includes(senderCompId)) {
      this.logger.error(
        `SenderCompID ${senderCompId} not allowed for ${account}`,
      );
      return { isValid: false, message: 'Invalid sender comp ID' };
    }

    return { isValid: true };
  }
}
