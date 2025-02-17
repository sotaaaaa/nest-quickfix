import { RedisOptions } from 'ioredis';

export type StoreType = 'memory' | 'redis';

export interface MessageStoreConfig {
  type: StoreType;
  sessionPrefix: string;
}