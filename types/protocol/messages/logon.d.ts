import { Message } from '../../message/message';
export declare class LogonMessage extends Message {
    constructor(heartBtInt: number, encryptMethod?: number, resetSeqNum?: boolean);
    setCredentials(username: string, password: string): void;
}
