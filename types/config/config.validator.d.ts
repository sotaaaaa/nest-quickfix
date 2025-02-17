import { FIXConfig } from './fix.config';
export declare class EnvConfig {
    FIX_HOST: string;
    FIX_PORT: number;
    FIX_SENDER_COMP_ID: string;
    FIX_TARGET_COMP_ID: string;
    FIX_HEARTBEAT_INTERVAL: number;
    FIX_LOG_FILE?: string;
    FIX_STORE_TYPE?: 'memory' | 'redis';
}
export declare class ConfigValidator {
    static validate(config: Record<string, unknown>): EnvConfig;
    static validateFIXConfig(config: FIXConfig): void;
}
