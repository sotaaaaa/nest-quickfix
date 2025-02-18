import { FIXConfig } from './config/fix.config';
import { Message } from './message';
import { MessageStoreConfig } from './store/store.config';

export interface FIXModuleOptions {
  config: FIXConfig;
  store: MessageStoreConfig;
  auth?: {
    validateCredentials: (message: Message) => Promise<boolean> | boolean;
    getAllowedSenderCompIds: (account: string) => Promise<string[]> | string[];
  };
  session?: {
    maxSessions?: number; // 0 = unlimited
  };
}
