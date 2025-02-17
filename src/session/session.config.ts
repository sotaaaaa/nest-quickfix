import { MessageStoreConfig } from '../store/store.config';

export interface SessionConfig {
  senderCompId: string;
  targetCompId: string;
  heartbeatInterval: number;
  beginString: string;
  storeConfig: MessageStoreConfig;
} 