import { Session } from './session';
import { SessionConfig } from './session.config';
import { Message } from '../message/message';

export declare class SessionManager {
    private sessions;
    private readonly maxSessions;
    
    constructor(maxSessions?: number);
    
    createSession(config: SessionConfig): Session;
    getSession(senderCompId: string, targetCompId: string): Session | undefined;
    getSessionFromLogon(logon: Message): Session | undefined;
    removeSession(sessionId: string): void;
    closeAll(): Promise<void>;
    getSessionCount(): number;
    private generateSessionId;
}
