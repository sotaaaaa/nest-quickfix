import { FIXConfig } from './config/fix.config';
import { MessageStoreConfig } from './store/store.config';
export interface FIXModuleOptions {
    config: FIXConfig;
    store: MessageStoreConfig;
}
