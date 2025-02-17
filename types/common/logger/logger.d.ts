import { LogLevel } from './types';
export declare class FIXLogger {
    private static logger;
    static initialize(options: {
        level: LogLevel;
        filename?: string;
        console?: boolean;
    }): void;
    static log(level: LogLevel, message: string, meta?: any): void;
    static error(message: string, error?: Error): void;
    static warn(message: string, meta?: any): void;
    static info(message: string, meta?: any): void;
    static debug(message: string, meta?: any): void;
}
