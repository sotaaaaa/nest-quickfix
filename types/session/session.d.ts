import { EventEmitter } from 'events';
import { Message } from '../message/message';
import { Socket } from 'socket.io';
import { RoomManager } from '../room/room.manager';
import { SessionManager } from '../session/session.manager';

export interface SessionConfig {
    senderCompId: string;
    targetCompId: string;
    heartbeatInterval: number;
    beginString: string;
    appName: string;
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

    constructor(
        config: SessionConfig,
        socket: Socket,
        roomManager: RoomManager,
        sessionManager: SessionManager
    );

    logon(): Promise<void>;
    logout(reason?: string): Promise<void>;
    sendMessage(message: Message): Promise<void>;
    handleMessage(message: Message): void;
    private setupHeartbeat;
    private handleLogon;
    private handleLogout;
    private handleHeartbeat;
    private handleTestRequest;
    private setupTimeouts;
    private sendTestRequest;
    private terminate;
    private clearTimers;
    getSessionId(): string;
    getConfig(): SessionConfig;
    getSocket(): Socket;
    getNextOutgoingSeqNum(): number;
    join(roomId: string): void;
    leave(roomId: string): void;
    getRooms(): string[];
    registerLogonHandler(handler: Function): void;
    registerLogoutHandler(handler: Function): void;
    registerConnectedHandler(handler: Function): void;
    registerDisconnectedHandler(handler: Function): void;
    registerMessageHandler(handler: Function, msgType?: string): void;
}
