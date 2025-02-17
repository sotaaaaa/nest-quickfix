import { FIXConfig } from '../config/fix.config';
export interface AcceptorConfig extends FIXConfig {
    auth?: {
        validateCredentials: (username: string, password: string) => Promise<boolean>;
        getAllowedSenderCompIds: (username: string) => Promise<string[]>;
    };
    session?: {
        maxSessions?: number;
    };
}
