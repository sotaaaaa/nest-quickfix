import { Message } from '../../message/message';
export declare class MessageQueue {
    private queue;
    private processing;
    private readonly maxBatchSize;
    private readonly processInterval;
    constructor();
    enqueue(message: Message, priority?: number): void;
    private startProcessing;
    private processBatch;
    private sendBatch;
}
