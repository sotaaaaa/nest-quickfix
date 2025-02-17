import { EventEmitter } from 'events';
import { InitiatorConfig } from './initiator.config';
import { Message } from '../message/message';
export declare class FIXInitiator extends EventEmitter {
    private readonly config;
    private session;
    private socket;
    private reconnectTimer;
    private reconnectAttempts;
    constructor(config: InitiatorConfig);
    start(): Promise<void>;
    stop(): Promise<void>;
    sendMessage(message: Message): Promise<void>;
    private setupSession;
    private connect;
    private scheduleReconnect;
    private handleReconnect;
}
