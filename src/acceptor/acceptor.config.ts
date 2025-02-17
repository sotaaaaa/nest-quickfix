/**
 * Configuration interface for FIX Acceptor
 */
import { FIXConfig } from '../config/fix.config';

export interface AcceptorConfig extends FIXConfig {
  auth?: {
    validateCredentials: (
      account: string,
      password: string,
    ) => Promise<boolean>;
    getAllowedSenderCompIds: (account: string) => Promise<string[]>;
  };
  session?: {
    maxSessions?: number; // 0 = unlimited
  };
}
