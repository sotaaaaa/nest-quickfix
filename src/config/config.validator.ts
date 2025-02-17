import { plainToClass } from 'class-transformer';
import { IsString, IsNumber, IsBoolean, validateSync, IsOptional } from 'class-validator';
import { FIXConfig } from './fix.config';

export class EnvConfig {
  @IsString()
  FIX_HOST: string;

  @IsNumber()
  FIX_PORT: number;

  @IsString()
  FIX_SENDER_COMP_ID: string;

  @IsString()
  FIX_TARGET_COMP_ID: string;

  @IsNumber()
  FIX_HEARTBEAT_INTERVAL: number;

  @IsString()
  @IsOptional()
  FIX_LOG_FILE?: string;

  @IsString()
  @IsOptional()
  FIX_STORE_TYPE?: 'memory' | 'redis';
}

export class ConfigValidator {
  static validate(config: Record<string, unknown>) {
    const validatedConfig = plainToClass(EnvConfig, config, {
      enableImplicitConversion: true,
    });

    const errors = validateSync(validatedConfig, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    return validatedConfig;
  }

  static validateFIXConfig(config: FIXConfig) {
    // Add FIX specific validation rules
    if (!config.BeginString.startsWith('FIX')) {
      throw new Error('Invalid BeginString format');
    }

    if (config.HeartBtInt <= 0) {
      throw new Error('HeartBtInt must be greater than 0');
    }
  }
} 