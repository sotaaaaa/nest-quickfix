import { RoomManager } from './../services/room.manager';
import { EventEmitter } from 'events';
import { Message } from '../message/message';
import { SessionState } from './session.state';
import {
  LogonMessage,
  LogoutMessage,
  HeartbeatMessage,
  ResendRequestMessage,
  TestRequestMessage,
} from '../protocol/messages';
import { Fields, MsgType } from '../fields';
import { SessionEvents } from '../constants/events.constant';
import { v4 as uuid } from 'uuid';
import { MessageStoreConfig } from '../store/store.config';
import { MessageStore } from '../store/message.store';
import { Socket } from 'net';
import { Logger } from '@nestjs/common';
import { Session as SessionInterface } from '../interfaces/session.interface';
import { SessionManager } from './session.manager';

/**
 * Configuration for a FIX session
 */
export interface SessionConfig {
  senderCompId: string;
  targetCompId: string;
  heartbeatInterval: number;
  beginString: string;
  storeConfig: MessageStoreConfig;
}

/**
 * Represents a FIX session between two parties
 */
export class Session extends EventEmitter implements SessionInterface {
  private state: SessionState = SessionState.DISCONNECTED;
  private nextOutgoingSeqNum: number = 1;
  private nextExpectedSeqNum: number = 1;
  private lastHeartbeatTime: number;
  private heartbeatTimer: NodeJS.Timeout;
  private readonly HEARTBEAT_TIMEOUT = 1.5; // Factor of heartbeat interval
  private readonly TEST_REQUEST_TIMEOUT = 2; // Seconds to wait for heartbeat response
  private lastTestRequestId: string | null = null;
  private lastTestRequestTime: number;
  private testRequestTimer: NodeJS.Timeout;
  private readonly sessionId: string;
  private readonly messageStore: MessageStore;
  private logonHandlers: Function[] = [];
  private logoutHandlers: Function[] = [];
  private connectedHandlers: Function[] = [];
  private disconnectedHandlers: Function[] = [];
  private messageHandlers: Array<{ handler: Function; msgType?: string }> = [];

  constructor(
    private readonly config: SessionConfig,
    private readonly socket: Socket,
    private readonly roomManager: RoomManager,
    private readonly sessionManager: SessionManager,
  ) {
    super();
    this.sessionId = `${config.senderCompId}->${config.targetCompId}`;
    Logger.debug(`Creating session with ID: ${this.sessionId}`);
    Logger.debug(`Session config: ${JSON.stringify(config)}`);
    this.messageStore = new MessageStore(config.storeConfig);

    // Register with session manager immediately
    this.sessionManager.registerSession(this);

    // Handle errors
    this.on('error', (error) => {
      Logger.error(`[${this.sessionId}] Session error: ${error}`);
      // Don't throw, just log
    });

    this.setupHeartbeat();
    this.setupTimeouts();
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

      const logon = new LogonMessage(
        this.config.heartbeatInterval,
        0, // No encryption
        true, // Reset sequence numbers
      );

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
    if (this.state !== SessionState.LOGGED_ON) {
      throw new Error('Session must be in LOGGED_ON state to logout');
    }

    try {
      this.state = SessionState.LOGGING_OUT;
      const logout = new LogoutMessage(reason);
      await this.sendMessage(logout);
      this.emit(SessionEvents.LOGGING_OUT);
    } catch (error) {
      this.state = SessionState.ERROR;
      throw error;
    }
  }

  /**
   * Sends a message through the session
   */
  async sendMessage(message: Message): Promise<void> {
    try {
      console.log(
        message.hasField(Fields.SenderCompID),
        'CHECK SENDER COMP ID',
        message.getAllFields(),
      );
      // Add required fields if not present
      if (!message.hasField(Fields.SenderCompID)) {
        message.setField(Fields.SenderCompID, this.config.senderCompId);
      }
      if (!message.hasField(Fields.TargetCompID)) {
        message.setField(Fields.TargetCompID, this.config.targetCompId);
      }
      if (!message.hasField(Fields.SendingTime)) {
        message.setField(Fields.SendingTime, new Date().toISOString());
      }
      if (!message.hasField(Fields.MsgSeqNum)) {
        message.setField(Fields.MsgSeqNum, this.nextOutgoingSeqNum++);
      }
      if (!message.hasField(Fields.BeginString)) {
        message.setField(Fields.BeginString, this.config.beginString);
      }

      if (this.socket && this.socket.writable) {
        const rawMessage = message.toString();
        await new Promise<void>((resolve, reject) => {
          this.socket.write(rawMessage, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });

        await this.messageStore.storeMessage(this.sessionId, message);
        Logger.debug(`[${this.sessionId}] Message sent successfully`);
      } else {
        throw new Error('Socket not writable');
      }
    } catch (error) {
      Logger.error(`[${this.sessionId}] Failed to send message:`, error);
      throw error;
    }
  }

  private calculateChecksum(message: string): string {
    let sum = 0;
    for (let i = 0; i < message.length; i++) {
      sum += message.charCodeAt(i);
    }
    return (sum % 256).toString().padStart(3, '0');
  }

  /**
   * Handles incoming messages
   */
  async handleMessage(message: Message): Promise<void> {
    try {
      const msgType = message.getField(Fields.MsgType);

      if (msgType === MsgType.Logon) {
        // Update state and send logon response first
        this.state = SessionState.LOGGED_ON;
        await this.handleLogon(message);
      } else if (msgType === MsgType.Logout) {
        await this.handleLogout(message);
      }

      // Handle other message types
      switch (msgType) {
        case MsgType.Heartbeat:
          this.handleHeartbeat(message);
          break;
        case MsgType.TestRequest:
          await this.handleTestRequest(message);
          break;
      }

      // Execute message handlers
      for (const { handler, msgType: handlerMsgType } of this.messageHandlers) {
        if (!handlerMsgType || handlerMsgType === msgType) {
          try {
            await handler(this, message);
          } catch (error) {
            Logger.error(
              `[${this.sessionId}] Error in message handler:`,
              error,
            );
          }
        }
      }

      // Update last received time
      this.lastHeartbeatTime = Date.now();
    } catch (error) {
      Logger.error(`[${this.sessionId}] Error handling message:`, error);
      throw error;
    }
  }

  private setupHeartbeat(): void {
    // Clear existing timer if any
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
    }

    Logger.debug(
      `[${this.sessionId}] Setting up heartbeat timer: ${this.config.heartbeatInterval}s`,
    );

    this.heartbeatTimer = setInterval(async () => {
      if (this.state === SessionState.LOGGED_ON) {
        try {
          const heartbeat = new HeartbeatMessage();
          await this.sendMessage(heartbeat);
        } catch (error) {
          Logger.error(
            `[${this.sessionId}] Failed to send heartbeat: ${error}`,
          );
        }
      }
    }, this.config.heartbeatInterval * 1000);
  }

  private validateSequenceNumber(message: Message): void {
    const seqNum = parseInt(message.getField(Fields.MsgSeqNum));

    if (seqNum < this.nextExpectedSeqNum) {
      throw new Error('Lower than expected sequence number');
    }

    if (seqNum > this.nextExpectedSeqNum) {
      // Request resend
      this.requestResend(this.nextExpectedSeqNum, seqNum - 1);
    }

    this.nextExpectedSeqNum = seqNum + 1;
  }

  /**
   * Updates the last heartbeat timestamp
   */
  private updateLastHeartbeatTime(): void {
    this.lastHeartbeatTime = Date.now();
  }

  /**
   * Handles incoming Logon message
   */
  private async handleLogon(message: Message): Promise<void> {
    try {
      // Update state to LOGGED_ON first
      this.state = SessionState.LOGGED_ON;
      Logger.debug(`[${this.sessionId}] Session state changed to LOGGED_ON`);

      // Send logon response
      await this.sendLogonResponse(message);
      Logger.debug(`[${this.sessionId}] Logon response sent`);

      // Execute connected handlers
      for (const handler of this.connectedHandlers) {
        try {
          Logger.debug(`[${this.sessionId}] Executing connected handler`);
          await handler(this);
        } catch (error) {
          Logger.error(
            `[${this.sessionId}] Error in connected handler:`,
            error,
          );
        }
      }

      // Execute logon handlers
      for (const handler of this.logonHandlers) {
        try {
          Logger.debug(`[${this.sessionId}] Executing logon handler`);
          await handler(this, message);
        } catch (error) {
          Logger.error(`[${this.sessionId}] Error in logon handler:`, error);
        }
      }

      // Setup heartbeat after all handlers are executed
      this.setupHeartbeat();

      // Emit logged on event last
      this.emit(SessionEvents.LOGGED_ON);
      Logger.log(`[${this.sessionId}] Session logged on`);
    } catch (error) {
      Logger.error(`[${this.sessionId}] Failed to handle logon:`, error);
      this.state = SessionState.ERROR;
      throw error;
    }
  }

  /**
   * Handles incoming Logout message
   */
  private async handleLogout(message: Message): Promise<void> {
    try {
      // Execute logout handlers
      for (const handler of this.logoutHandlers) {
        try {
          await handler(this, message);
        } catch (error) {
          Logger.error(`[${this.sessionId}] Error in logout handler:`, error);
        }
      }

      this.state = SessionState.DISCONNECTED;
      this.emit(SessionEvents.LOGGED_OUT);
    } catch (error) {
      Logger.error(`[${this.sessionId}] Error handling logout:`, error);
      throw error;
    }
  }

  /**
   * Handles incoming Heartbeat message
   */
  private handleHeartbeat(message: Message): void {
    // Reset heartbeat timer since we received a message
    this.lastHeartbeatTime = Date.now();

    // If this was in response to a test request, clear the test request timer
    if (message.hasField(Fields.TestReqID)) {
      const testReqId = message.getField(Fields.TestReqID);
      if (testReqId === this.lastTestRequestId) {
        this.clearTestRequestTimer();
      }
    }
  }

  /**
   * Handles incoming TestRequest message
   */
  private async handleTestRequest(message: Message): Promise<void> {
    const testReqId = message.getField(Fields.TestReqID);
    const heartbeat = new HeartbeatMessage(testReqId);
    this.sendMessage(heartbeat).catch((err) => {
      this.emit(SessionEvents.ERROR, err);
    });
  }

  /**
   * Requests message resend for missing sequence numbers
   */
  private async requestResend(
    beginSeqNo: number,
    endSeqNo: number,
  ): Promise<void> {
    const resendRequest = new ResendRequestMessage(beginSeqNo, endSeqNo);
    await this.sendMessage(resendRequest);
  }

  private setupTimeouts(): void {
    // Clear existing timer if any
    if (this.testRequestTimer) {
      clearTimeout(this.testRequestTimer);
    }

    this.testRequestTimer = setTimeout(() => {
      if (this.lastTestRequestId) {
        try {
          this.terminate('Test request timeout');
        } catch (error) {
          Logger.error(
            `[${this.sessionId}] Error handling test request timeout: ${error}`,
          );
        }
      }
    }, this.TEST_REQUEST_TIMEOUT * 1000);
  }

  private sendTestRequest(): void {
    this.lastTestRequestId = uuid();
    const testRequest = new TestRequestMessage(this.lastTestRequestId);

    this.sendMessage(testRequest).catch((err) => {
      this.emit(SessionEvents.ERROR, err);
    });
  }

  private terminate(reason: string): void {
    try {
      Logger.warn(`[${this.sessionId}] Terminating session: ${reason}`);
      this.state = SessionState.ERROR;

      // Emit error but don't throw
      this.emit(SessionEvents.ERROR, new Error(reason));

      // Try to logout gracefully
      this.logout(reason).catch((error) => {
        Logger.error(`[${this.sessionId}] Error during logout: ${error}`);
        this.handleDisconnect();
      });
    } catch (error) {
      Logger.error(`[${this.sessionId}] Error during termination: ${error}`);
      this.handleDisconnect();
    }
  }

  // Enhanced sequence number handling
  private async resetSequenceNumbers(): Promise<void> {
    this.nextOutgoingSeqNum = 1;
    this.nextExpectedSeqNum = 1;
    await this.messageStore.updateSequenceNumbers(
      this.sessionId,
      this.nextExpectedSeqNum,
      this.nextOutgoingSeqNum,
    );
  }

  async resendMessage(message: Message): Promise<void> {
    // Add PossDupFlag for resent messages
    message.setField(Fields.PossDupFlag, 'Y');
    await this.sendMessage(message);
  }

  async send(message: Message): Promise<void> {
    await this.sendMessage(message);
  }

  async sendLogon(): Promise<void> {
    const logon = new LogonMessage(this.config.heartbeatInterval, 0, true);
    await this.sendMessage(logon);
  }

  async sendLogout(text?: string): Promise<void> {
    const logout = new LogoutMessage(text);
    await this.sendMessage(logout);
  }

  private logMessage(message: Message, direction: 'IN' | 'OUT'): void {
    const rawMessage = message.toString();
    Logger.debug(
      `[${this.sessionId}] ${direction}: ${rawMessage.replace(/\x01/g, '|')}`,
    );
  }

  /**
   * Get the socket associated with this session
   */
  getSocket(): Socket {
    return this.socket;
  }

  /**
   * Get session ID
   */
  getSessionId(): string {
    return this.sessionId;
  }

  /**
   * Handle unexpected disconnection
   */
  handleDisconnect(): void {
    if (this.state === SessionState.LOGGED_ON) {
      // Execute disconnected handlers
      for (const handler of this.disconnectedHandlers) {
        try {
          handler(this);
        } catch (error) {
          Logger.error(
            `[${this.sessionId}] Error in disconnected handler:`,
            error,
          );
        }
      }

      this.roomManager.leaveAllRooms(this.sessionId);
      this.state = SessionState.DISCONNECTED;
      this.emit(SessionEvents.LOGGED_OUT);
      Logger.warn(`[${this.sessionId}] Session disconnected unexpectedly`);
    }

    // Cleanup timers
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
    }
    this.clearTestRequestTimer();
  }

  /**
   * Clear test request timer
   */
  private clearTestRequestTimer(): void {
    if (this.testRequestTimer) {
      clearTimeout(this.testRequestTimer);
      this.testRequestTimer = null;
      this.lastTestRequestId = null;
    }
  }

  registerLogonHandler(handler: Function): void {
    this.logonHandlers.push(handler);
  }

  registerLogoutHandler(handler: Function): void {
    this.logoutHandlers.push(handler);
  }

  registerConnectedHandler(handler: Function): void {
    this.connectedHandlers.push(handler);
  }

  registerDisconnectedHandler(handler: Function): void {
    this.disconnectedHandlers.push(handler);
  }

  registerMessageHandler(handler: Function, msgType?: string): void {
    this.messageHandlers.push({ handler, msgType });
  }

  private async sendLogonResponse(logonMsg: Message): Promise<void> {
    const response = new LogonMessage(
      this.config.heartbeatInterval,
      0, // No encryption
      false, // Don't reset sequence numbers
    );

    // Set sender and target separately
    response.setField(Fields.SenderCompID, this.config.senderCompId);
    response.setField(Fields.TargetCompID, this.config.targetCompId);

    await this.sendMessage(response);
  }

  /**
   * Join a room
   */
  join(roomId: string): void {
    Logger.debug(`[${this.sessionId}] Joining room ${roomId}`);
    this.roomManager.join(roomId, this.sessionId);
    Logger.debug(`[${this.sessionId}] Successfully joined room ${roomId}`);
  }

  /**
   * Leave a room
   */
  leave(roomId: string): void {
    Logger.debug(`[${this.sessionId}] Leaving room ${roomId}`);
    this.roomManager.leave(roomId, this.sessionId);
  }

  /**
   * Get all rooms this session is in
   */
  getRooms(): string[] {
    return this.roomManager.getSessionRooms(this.sessionId);
  }

  /**
   * Get the next outgoing sequence number
   */
  getNextOutgoingSeqNum(): number {
    return this.nextOutgoingSeqNum;
  }
}
