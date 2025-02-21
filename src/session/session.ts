import { RoomManager } from './../services/room.manager';
import { EventEmitter } from 'events';
import { Message } from '../message/message';
import { SessionState } from './session.state';
import {
  LogonMessage,
  LogoutMessage,
  HeartbeatMessage,
} from '../protocol/messages';
import { Fields, MsgType } from '../fields';
import { SessionEvents } from '../constants/events.constant';
import { Socket } from 'net';
import { Logger } from '@nestjs/common';
import { Session as SessionInterface } from '../interfaces/session.interface';
import { SessionManager } from './session.manager';
import { SessionConfig } from './session.config';

/**
 * Represents a FIX session between two parties
 */
export class Session extends EventEmitter implements SessionInterface {
  private readonly logger = new Logger(Session.name);
  private readonly sessionId: string;
  private readonly HEARTBEAT_TIMEOUT = 1.5;
  private readonly TEST_REQUEST_TIMEOUT = 2;

  private state: SessionState = SessionState.DISCONNECTED;
  private nextOutgoingSeqNum = 1;
  private nextExpectedSeqNum = 1;
  private lastHeartbeatTime: number;
  private heartbeatTimer: NodeJS.Timeout;
  private lastTestRequestId: string | null = null;
  private testRequestTimer: NodeJS.Timeout;
  private config: SessionConfig;

  private readonly handlers = {
    logon: new Set<Function>(),
    logout: new Set<Function>(),
    connected: new Set<Function>(),
    disconnected: new Set<Function>(),
    message: new Set<{ handler: Function; msgType?: string }>(),
  };

  constructor(
    config: SessionConfig,
    private readonly socket: Socket,
    private readonly roomManager: RoomManager,
    private readonly sessionManager: SessionManager,
  ) {
    super();
    this.config = config;
    this.sessionId = `${config.senderCompId}->${config.targetCompId}`;
    this.logger.debug(`Session created: ${this.sessionId}`);

    // Setup error handling and heartbeat
    this.setupErrorHandling();
    this.setupHeartbeat();
  }

  /**
   * Initiates logon sequence
   */
  async logon(): Promise<void> {
    if (this.state !== SessionState.CONNECTED) {
      throw new Error('Session must be in CONNECTED state to logon');
    }

    try {
      this.state = SessionState.LOGGING_ON;
      const logon = new LogonMessage(this.config.heartbeatInterval, 0, true);
      await this.sendMessage(logon);
      this.emit(SessionEvents.LOGGING_ON);
    } catch (error) {
      this.state = SessionState.ERROR;
      throw error;
    }
  }

  /**
   * Initiates logout sequence
   */
  async logout(reason?: string): Promise<void> {
    try {
      // Allow logout from any state except DISCONNECTED
      if (this.state === SessionState.DISCONNECTED) {
        throw new Error('Session already disconnected');
      }

      this.state = SessionState.LOGGING_OUT;
      const logout = new LogoutMessage(reason);
      
      try {
        await this.sendMessage(logout);
      } catch (error) {
        this.logger.warn('Failed to send logout message:', error);
      }
      
      this.emit(SessionEvents.LOGGING_OUT);

      // Handle disconnect
      this.handleDisconnect();

      // Close socket
      if (this.socket?.writable) {
        this.socket.end(() => {
          this.logger.debug(`Socket closed for session ${this.sessionId}`);
        });
      }

      // Remove session from SessionManager
      this.sessionManager.removeSession(this.sessionId);
      
      this.emit(SessionEvents.LOGGED_OUT);
    } catch (error) {
      this.logger.error('Error handling logout:', error);
      throw error;
    }
  }

  /**
   * Sends a message through the session
   */
  async sendMessage(message: Message): Promise<void> {
    try {
      this.addRequiredFields(message);

      if (!this.socket?.writable) {
        throw new Error('Socket not writable');
      }

      // Reverse the message to send to the other party
      const reversedMessage = message.createReverse();
      const rawMessage = reversedMessage.toString();

      // Send the message
      await new Promise<void>((resolve, reject) => {
        this.socket.write(rawMessage, (error) => {
          error ? reject(error) : resolve();
        });
      });

      Logger.debug(
        `[${this.sessionId}] OUT: ${rawMessage.replace(/\x01/g, '|')}`,
      );
    } catch (error) {
      this.logger.error('Failed to send message:', error);
      throw error;
    }
  }

  /**
   * Handles incoming messages
   */
  async handleMessage(message: Message): Promise<void> {
    try {
      const msgType = message.getField(Fields.MsgType);

      // Handle session-level messages first
      switch (msgType) {
        case MsgType.Logon:
          await this.handleLogon(message);
          break;
        case MsgType.Logout:
          await this.handleLogout(message);
          break;
        case MsgType.Heartbeat:
          this.handleHeartbeat(message);
          break;
        case MsgType.TestRequest:
          await this.handleTestRequest(message);
          break;
      }

      // Execute message handlers
      for (const { handler, msgType: handlerMsgType } of this.handlers
        .message) {
        if (!handlerMsgType || handlerMsgType === msgType) {
          await handler(this, message);
        }
      }

      this.lastHeartbeatTime = Date.now();
    } catch (error) {
      this.logger.error('Error handling message:', error);
      throw error;
    }
  }

  /**
   * Adds required fields to message if missing
   */
  private addRequiredFields(message: Message): void {
    const fields = {
      [Fields.BeginString]: this.config.beginString,
      [Fields.SenderCompID]: this.config.senderCompId,
      [Fields.TargetCompID]: this.config.targetCompId,
      [Fields.SendingTime]: new Date().toISOString(),
      [Fields.MsgSeqNum]: this.nextOutgoingSeqNum++,
    };

    Object.entries(fields).forEach(([field, value]) => {
      if (!message.hasField(Number(field))) {
        message.setField(Number(field), value);
      }
    });
  }

  private setupHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
    }

    this.heartbeatTimer = setInterval(async () => {
      if (this.state === SessionState.LOGGED_ON) {
        try {
          await this.sendMessage(new HeartbeatMessage());
        } catch (error) {
          this.logger.error('Failed to send heartbeat:', error);
        }
      }
    }, this.config.heartbeatInterval * 1000);
  }

  private setupErrorHandling(): void {
    this.on('error', (error) => {
      this.logger.error('Session error:', error);
    });
  }

  private async handleLogon(message: Message): Promise<void> {
    try {
      this.state = SessionState.LOGGED_ON;
      await this.sendLogonResponse();

      this.handlers.connected.forEach((handler) => handler(this));
      this.handlers.logon.forEach((handler) => handler(this, message));

      this.emit(SessionEvents.LOGGED_ON);
      this.logger.log('Session logged on');
    } catch (error) {
      this.logger.error('Failed to handle logon:', error);
      this.state = SessionState.ERROR;
      throw error;
    }
  }

  private async handleLogout(message: Message): Promise<void> {
    try {
      this.handlers.logout.forEach((handler) => handler(this, message));
      this.state = SessionState.DISCONNECTED;
      this.emit(SessionEvents.LOGGED_OUT);

      // Thêm xử lý disconnect
      this.handleDisconnect();

      // Đóng socket
      if (this.socket) {
        this.socket.end(() => {
          this.logger.debug(`Socket closed for session ${this.sessionId}`);
        });
      }

      // Xóa session khỏi SessionManager
      this.sessionManager.removeSession(this.sessionId);
    } catch (error) {
      this.logger.error('Error handling logout:', error);
      throw error;
    }
  }

  private handleHeartbeat(message: Message): void {
    this.lastHeartbeatTime = Date.now();

    if (
      message.hasField(Fields.TestReqID) &&
      message.getField(Fields.TestReqID) === this.lastTestRequestId
    ) {
      this.clearTestRequestTimer();
    }
  }

  private async handleTestRequest(message: Message): Promise<void> {
    const testReqId = message.getField(Fields.TestReqID);
    await this.sendMessage(new HeartbeatMessage(testReqId));
  }

  private async sendLogonResponse(): Promise<void> {
    const response = new LogonMessage(this.config.heartbeatInterval, 0, false);
    await this.sendMessage(response);
  }

  private clearTestRequestTimer(): void {
    if (this.testRequestTimer) {
      clearTimeout(this.testRequestTimer);
      this.testRequestTimer = null;
      this.lastTestRequestId = null;
    }
  }

  /**
   * Handles session disconnection
   */
  handleDisconnect(): void {
    this.state = SessionState.DISCONNECTED;
    this.clearTimers();
    this.handlers.disconnected.forEach((handler) => handler(this));
    this.emit(SessionEvents.DISCONNECT);
    
    // Ensure cleanup of resources
    if (this.socket) {
      this.socket.removeAllListeners();
    }
  }

  private clearTimers(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    if (this.testRequestTimer) {
      clearTimeout(this.testRequestTimer);
      this.testRequestTimer = null;
    }
  }

  // Public methods for session management
  getSessionId(): string {
    return this.sessionId;
  }

  // Get session config
  getConfig(): SessionConfig {
    return this.config;
  }

  getSocket(): Socket {
    return this.socket;
  }

  getNextOutgoingSeqNum(): number {
    return this.nextOutgoingSeqNum;
  }

  // Room management methods
  join(roomId: string): void {
    this.logger.debug(`Joining room: ${roomId}`);
    this.roomManager.join(roomId, this.sessionId);
  }

  leave(roomId: string): void {
    this.logger.debug(`Leaving room: ${roomId}`);
    this.roomManager.leave(roomId, this.sessionId);
  }

  getRooms(): string[] {
    return this.roomManager.getSessionRooms(this.sessionId);
  }

  // Handler registration methods
  registerLogonHandler(handler: Function): void {
    this.handlers.logon.add(handler);
  }

  registerLogoutHandler(handler: Function): void {
    this.handlers.logout.add(handler);
  }

  registerConnectedHandler(handler: Function): void {
    this.handlers.connected.add(handler);
  }

  registerDisconnectedHandler(handler: Function): void {
    this.handlers.disconnected.add(handler);
  }

  registerMessageHandler(handler: Function, msgType?: string): void {
    this.handlers.message.add({ handler, msgType });
  }
}
