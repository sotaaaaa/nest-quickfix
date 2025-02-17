import * as winston from 'winston';
import { LogLevel } from './types';

export class FIXLogger {
  private static logger: winston.Logger;

  static initialize(options: {
    level: LogLevel;
    filename?: string;
    console?: boolean;
  }) {
    const transports: winston.transport[] = [];
    
    if (options.console) {
      transports.push(new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.colorize(),
          winston.format.printf(({ timestamp, level, message, ...meta }) => {
            return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
          })
        )
      }));
    }

    if (options.filename) {
      transports.push(new winston.transports.File({
        filename: options.filename,
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json()
        )
      }));
    }

    this.logger = winston.createLogger({
      level: options.level,
      transports
    });
  }

  static log(level: LogLevel, message: string, meta?: any) {
    if (!this.logger) {
      this.initialize({ level: 'info', console: true });
    }
    this.logger.log(level, message, meta);
  }

  static error(message: string, error?: Error) {
    this.log('error', message, { error: error?.stack });
  }

  static warn(message: string, meta?: any) {
    this.log('warn', message, meta);
  }

  static info(message: string, meta?: any) {
    this.log('info', message, meta);
  }

  static debug(message: string, meta?: any) {
    this.log('debug', message, meta);
  }
} 