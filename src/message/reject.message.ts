import { Message } from './message';
import { Fields, MsgType } from '../fields';

export class RejectMessage extends Message {
  constructor(refSeqNum: number, reason: string, refMsgType?: string) {
    super();
    this.setField(Fields.MsgType, MsgType.Reject);
    this.setField(Fields.RefSeqNum, refSeqNum);
    this.setField(Fields.Text, reason);
    
    if (refMsgType) {
      this.setField(Fields.RefMsgType, refMsgType);
    }
  }
} 