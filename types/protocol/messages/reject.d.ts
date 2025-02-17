import { Message } from '../../message/message';
export declare class RejectMessage extends Message {
    constructor(refSeqNum: number, reason: string, refMsgType?: string);
}
