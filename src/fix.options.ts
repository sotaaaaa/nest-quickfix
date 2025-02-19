import { FIXConfig } from './config/fix.config';
import { Message } from './message';

export interface FIXModuleOptions {
  config: FIXConfig;
  auth?: {
    validateCredentials: (message: Message) => Promise<boolean> | boolean;
    getAllowedSenderCompIds: (account: string) => Promise<string[]> | string[];
  };
  session?: {
    maxSessions?: number; // 0 = unlimited
  };
}
