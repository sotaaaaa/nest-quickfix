import { FIXConfig } from '../config/fix.config';
import { SessionConfig } from '../session/session.config';

/**
 * Configuration interface for FIX Initiator
 */
export interface InitiatorConfig extends FIXConfig {
  reconnect?: {
    enabled: boolean;
    interval: number;
    maxAttempts: number;
  };
  session?: {
    maxSessions?: number;
  };
}
