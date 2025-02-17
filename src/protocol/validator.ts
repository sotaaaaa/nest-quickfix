import { Fields, MsgType } from "../fields";
import { Message } from "../message/message";


/**
 * Validator cho FIX 4.4 messages
 * Kiểm tra tính hợp lệ của message theo spec
 */
export class FIX44Validator {
  /**
   * Kiểm tra các trường bắt buộc của message
   * @param message Message cần validate
   * @throws Error nếu thiếu trường bắt buộc
   */
  static validateRequiredFields(message: Message): void {
    const requiredFields = [
      Fields.BeginString,
      Fields.BodyLength,
      Fields.MsgType,
      Fields.SenderCompID,
      Fields.TargetCompID,
      Fields.MsgSeqNum,
      Fields.SendingTime
    ];

    for (const field of requiredFields) {
      if (!message.hasField(field)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
  }

  /**
   * Kiểm tra thứ tự các trường theo spec
   * @param message Message cần validate
   * @returns boolean
   */
  static validateFieldOrder(message: Message): boolean {
    // TODO: Implement field order validation
    return true;
  }

  /**
   * Validate giá trị của các trường
   * @param message Message cần validate
   * @throws Error nếu giá trị không hợp lệ
   */
  static validateFieldValues(message: Message): void {
    const msgType = message.getField(Fields.MsgType);
    
    // Validate theo message type
    switch (msgType) {
      case MsgType.Logon: // Logon
        this.validateLogon(message);
        break;
      // Thêm các case khác...
    }
  }

  private static validateLogon(message: Message): void {
    // Validate specific logon fields
    if (!message.hasField(Fields.HeartBtInt)) {
      throw new Error('Logon message must contain HeartBtInt');
    }
    // Thêm các validation khác...
  }
} 