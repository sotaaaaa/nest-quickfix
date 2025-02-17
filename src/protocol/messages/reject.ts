import { Message, Field } from '../../message/message';
import { Fields, MsgType } from '../../fields';

/**
 * Reject message template cho FIX 4.4
 * Dùng để từ chối message không hợp lệ
 */
export class RejectMessage extends Message {
  /**
   * Khởi tạo Reject message
   * @param refSeqNum Sequence number của message bị reject
   * @param reason Lý do reject
   * @param refMsgType Message type bị reject
   */
  constructor(refSeqNum: number, reason: string, refMsgType?: string) {
    super(
      new Field(Fields.MsgType, MsgType.Reject),
      new Field(Fields.RefSeqNum, refSeqNum),
      new Field(Fields.Text, reason)
    );
    
    if (refMsgType) {
      this.setField(Fields.RefMsgType, refMsgType);
    }
  }
} 