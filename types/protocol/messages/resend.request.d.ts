import { Message } from '../../message/message';
export declare class ResendRequestMessage extends Message {
    constructor(beginSeqNo: number, endSeqNo: number);
}
