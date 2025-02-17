import { Message } from '../message/message';
import { MessageStoreConfig } from './store.config';

export declare class MessageStore {
    private readonly config;
    private messages;
    private sequenceNumbers;
    constructor(config: MessageStoreConfig);
    storeMessage(sessionId: string, message: Message): Promise<void>;
    getMessages(sessionId: string, beginSeqNo: number, endSeqNo: number): Promise<Message[]>;
    updateSequenceNumbers(sessionId: string, inbound: number, outbound: number): Promise<void>;
    getLastSequenceNumber(sessionId: string): Promise<number>;
}
