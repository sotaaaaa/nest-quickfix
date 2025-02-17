import { Message } from '../../message/message';
import { Fields, MsgType } from '../../fields';

export class ResendRequestMessage extends Message {
  constructor(beginSeqNo: number, endSeqNo: number) {
    super();
    this.setField(Fields.MsgType, MsgType.ResendRequest); // ResendRequest
    this.setField(Fields.BeginSeqNo, beginSeqNo);
    this.setField(Fields.EndSeqNo, endSeqNo);
  }
} 