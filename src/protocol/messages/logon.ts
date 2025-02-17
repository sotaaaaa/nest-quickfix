import { Message, Field } from '../../message/message';
import { Fields } from '../../fields';

/**
 * Logon message template cho FIX 4.4
 * Được sử dụng để thiết lập phiên kết nối giữa 2 bên
 */
export class LogonMessage extends Message {
  /**
   * Khởi tạo Logon message với các tham số bắt buộc
   * @param heartBtInt Heartbeat interval tính bằng giây
   * @param encryptMethod Phương thức mã hóa (0 = None)
   * @param resetSeqNum Reset sequence number flag
   */
  constructor(heartBtInt: number, encryptMethod: number = 0, resetSeqNum: boolean = false) {
    super(
      new Field(Fields.MsgType, 'A'),
      new Field(Fields.HeartBtInt, heartBtInt),
      new Field(Fields.EncryptMethod, encryptMethod)
    );
    
    if (resetSeqNum) {
      this.setField(Fields.ResetSeqNumFlag, 'Y');
    }
  }

  /**
   * Set thông tin đăng nhập
   * @param username Username
   * @param password Password
   */
  setCredentials(username: string, password: string): void {
    this.setField(Fields.Username, username);
    this.setField(Fields.Password, password);
  }
} 