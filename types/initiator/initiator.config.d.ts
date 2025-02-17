import { FIXConfig } from '../config/fix.config';
export interface InitiatorConfig extends FIXConfig {
    reconnect?: {
        enabled: boolean;
        interval: number;
        maxAttempts: number;
    };
}
