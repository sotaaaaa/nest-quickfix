import { Fields, MsgType } from '../fields';
import { Message } from '../message/message';
import { FIX44Validator } from './validator';

/**
 * Quản lý protocol state và message flow
 */
export class ProtocolManager {
  private validator: typeof FIX44Validator;
  private messageQueue: Message[];
  private isLoggedOn: boolean;

  constructor() {
    this.validator = FIX44Validator;
    this.messageQueue = [];
    this.isLoggedOn = false;
  }

  /**
   * Xử lý message đến
   * @param message Message cần xử lý
   * @throws Error nếu message không hợp lệ
   */
  processIncoming(message: Message): void {
    // Validate message
    this.validator.validateRequiredFields(message);
    this.validator.validateFieldOrder(message);
    this.validator.validateFieldValues(message);

    // Queue message nếu cần
    if (this.shouldQueueMessage(message)) {
      this.messageQueue.push(message);
      return;
    }

    // Process message
    this.handleMessage(message);
  }

  /**
   * Kiểm tra xem message có cần queue không
   */
  private shouldQueueMessage(message: Message): boolean {
    // Queue nếu chưa logon và không phải logon message
    if (!this.isLoggedOn && message.getField(Fields.MsgType) !== 'A') {
      return true;
    }
    return false;
  }

  /**
   * Xử lý message theo type
   */
  private handleMessage(message: Message): void {
    const msgType = message.getField(Fields.MsgType);
    switch (msgType) {
      case MsgType.Logon: // Logon
        this.handleLogon(message);
        break;
      case MsgType.Heartbeat: // Heartbeat
        this.handleHeartbeat(message);
        break;
      case MsgType.Logout: // Logout
        this.handleLogout(message);
        break;
    }
  }

  private handleLogon(message: Message): void {
    this.isLoggedOn = true;
    // Process queued messages
    while (this.messageQueue.length > 0) {
      const queuedMsg = this.messageQueue.shift();
      if (queuedMsg) this.handleMessage(queuedMsg);
    }
  }

  private handleHeartbeat(message: Message): void {
    // Process heartbeat
  }

  private handleLogout(message: Message): void {
    this.isLoggedOn = false;
  }
} 