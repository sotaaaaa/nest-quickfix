import { Message } from '../../message/message';
import { Fields, MsgType } from '../../fields';

export class TestRequestMessage extends Message {
  constructor(testReqId: string) {
    super();
    this.setField(Fields.MsgType, MsgType.TestRequest);
    this.setField(Fields.TestReqID, testReqId);
  }
} 