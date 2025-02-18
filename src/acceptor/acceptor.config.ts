/**
 * Configuration interface for FIX Acceptor
 */
import { Message } from '../message';
import { FIXConfig } from '../config/fix.config';

export interface AcceptorConfig extends FIXConfig {
  auth?: {
    validateCredentials: (message: Message) => Promise<boolean> | boolean;
    getAllowedSenderCompIds: (account: string) => Promise<string[]> | string[];
  };
  session?: {
    maxSessions?: number; // 0 = unlimited
  };
}
