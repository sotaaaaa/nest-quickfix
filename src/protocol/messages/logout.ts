import { Message, Field } from '../../message/message';
import { Fields, MsgType } from '../../fields';

/**
 * Logout message template cho FIX 4.4
 * Dùng để kết thúc phiên một cách an toàn
 */
export class LogoutMessage extends Message {
  /**
   * Khởi tạo Logout message
   * @param text Optional - Lý do logout
   */
  constructor(text?: string) {
    super(new Field(Fields.MsgType, MsgType.Logout));

    if (text) {
      this.setField(Fields.Text, text);
    }
  }
}
