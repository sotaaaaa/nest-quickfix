import { MessageStoreConfig } from '../store/store.config';

/**
 * Configuration for FIX session
 */
export interface SessionConfig {
  /** Sender's CompID */
  senderCompId: string;
  
  /** Target's CompID */
  targetCompId: string;
  
  /** Heartbeat interval in seconds */
  heartbeatInterval: number;
  
  /** FIX protocol version */
  beginString: string;
  
  /** Message store configuration */
  storeConfig: MessageStoreConfig;
} 