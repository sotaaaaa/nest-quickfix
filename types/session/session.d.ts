import { EventEmitter } from 'events';
import { Message } from '../message/message';
import { MessageStoreConfig } from '../store/store.config';
export interface SessionConfig {
    senderCompId: string;
    targetCompId: string;
    heartbeatInterval: number;
    beginString: string;
    storeConfig: MessageStoreConfig;
}
export declare class Session extends EventEmitter {
    private readonly config;
    private state;
    private nextOutgoingSeqNum;
    private nextExpectedSeqNum;
    private lastHeartbeatTime;
    private heartbeatTimer;
    private readonly HEARTBEAT_TIMEOUT;
    private readonly TEST_REQUEST_TIMEOUT;
    private lastTestRequestId;
    private lastTestRequestTime;
    private testRequestTimer;
    private readonly sessionId;
    private readonly messageStore;
    constructor(config: SessionConfig);
    logon(): Promise<void>;
    logout(reason?: string): Promise<void>;
    sendMessage(message: Message): Promise<void>;
    handleMessage(message: Message): void;
    private setupHeartbeat;
    private validateSequenceNumber;
    private updateLastHeartbeatTime;
    private handleLogon;
    private handleLogout;
    private handleHeartbeat;
    private handleTestRequest;
    private requestResend;
    private setupTimeouts;
    private sendTestRequest;
    private terminate;
    private resetSequenceNumbers;
    resendMessage(message: Message): Promise<void>;
    send(message: Message): Promise<void>;
    sendLogon(): Promise<void>;
    sendLogout(text?: string): Promise<void>;
}
