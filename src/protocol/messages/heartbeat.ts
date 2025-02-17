import { Message, Field } from '../../message/message';
import { Fields, MsgType } from '../../fields';

/**
 * Heartbeat message template cho FIX 4.4
 * Dùng để duy trì kết nối giữa các bên
 */
export class HeartbeatMessage extends Message {
  /**
   * Khởi tạo Heartbeat message
   * @param testReqID Optional - ID của TestRequest nếu đây là response
   */
  constructor(testReqID?: string) {
    super(
      new Field(Fields.MsgType, MsgType.Heartbeat)
    );
    
    if (testReqID) {
      this.setField(Fields.TestReqID, testReqID);
    }
  }
} 