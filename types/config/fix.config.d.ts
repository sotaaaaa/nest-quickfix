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
    application: ApplicationConfig;
    Username: string;
    Password: string;
    EncryptMethod: number;
    ResetSeqNumFlag: boolean;
    LastSentSeqNum?: number;
    LastReceivedSeqNum?: number;
    HeartBtInt: number;
    SenderCompId: string;
    TargetCompID: string;
    TargetSubID?: string;
    BeginString: string;
    BodyLengthChars: number;
    reconnect?: ReconnectConfig;
}
