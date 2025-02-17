export interface TLSConfig {
  timeout: number;
  sessionTimeout: number;
  enableTrace: boolean;
  key: string;
  cert: string;
  ca: string[];
}

export interface TCPConfig {
  host: string;
  port: number;
  tls?: TLSConfig;
}

export interface ApplicationConfig {
  reconnectSeconds: number;
  type: 'initiator' | 'acceptor';
  name: string;
  tcp: TCPConfig;
  protocol: 'ascii';
  dictionary: string;
}

export interface ReconnectConfig {
  enabled: boolean;
  interval: number;
  maxAttempts: number;
}

export interface FIXConfig {
  /** Application configuration including connection details */
  application: ApplicationConfig;
  
  /** Username for authentication */
  Username?: string;
  
  /** Password for authentication */
  Password?: string;
  
  /** Method used for encryption (0 = None) */
  EncryptMethod: number;
  
  /** Whether to reset sequence numbers on logon */
  ResetSeqNumFlag: boolean;
  
  /** Last sent message sequence number */
  LastSentSeqNum?: number;
  
  /** Last received message sequence number */
  LastReceivedSeqNum?: number;
  
  /** Heartbeat interval in seconds */
  HeartBtInt: number;
  
  /** Sender's company ID. Can use * as wildcard */
  SenderCompID: string | '*';
  
  /** Target company ID. Can use * as wildcard */
  TargetCompID: string | '*';
  
  /** Optional target sub ID */
  TargetSubID?: string;
  
  /** FIX protocol version (e.g. FIX.4.2) */
  BeginString: string;
  
  /** Number of characters in body length field */
  BodyLengthChars: number;
  
  /** Configuration for reconnection behavior */
  reconnect?: ReconnectConfig;
}