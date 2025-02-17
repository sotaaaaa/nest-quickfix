import { Message } from '../message/message';
export declare class ProtocolManager {
    private validator;
    private messageQueue;
    private isLoggedOn;
    constructor();
    processIncoming(message: Message): void;
    private shouldQueueMessage;
    private handleMessage;
    private handleLogon;
    private handleHeartbeat;
    private handleLogout;
}
