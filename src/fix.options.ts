import { FIXConfig } from './config/fix.config';
import { MessageStoreConfig } from './store/store.config';

export interface FIXModuleOptions {
  config: FIXConfig;
  store: MessageStoreConfig;
  auth?: {
    validateCredentials: (
      username: string,
      password: string,
    ) => Promise<boolean>;
    getAllowedSenderCompIds: (username: string) => Promise<string[]>;
  };
  session?: {
    maxSessions?: number; // 0 = unlimited
  };
}
