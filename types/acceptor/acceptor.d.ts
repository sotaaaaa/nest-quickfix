import { EventEmitter } from 'events';
import { AcceptorConfig } from './acceptor.config';
export declare class FIXAcceptor extends EventEmitter {
    private readonly config;
    private server;
    private sessionManager;
    private activeSockets;
    private messageParser;
    constructor(config: AcceptorConfig);
    start(): Promise<void>;
    stop(): Promise<void>;
    private setupServer;
    private handleNewConnection;
    private handleIncomingData;
    private handleLogon;
    private routeMessage;
    private validateLogon;
}
