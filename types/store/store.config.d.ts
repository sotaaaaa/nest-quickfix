export interface MessageStoreConfig {
    type: 'memory' | 'redis';
    sessionPrefix?: string;
}
