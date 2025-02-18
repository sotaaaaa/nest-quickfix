export type StoreType = 'memory';

export interface MessageStoreConfig {
  type: StoreType;
  sessionPrefix: string;
}