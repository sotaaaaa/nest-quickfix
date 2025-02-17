import { MessageStore } from '../store/message.store';
import { Session } from './session';
export declare class RecoveryManager {
    private readonly session;
    private readonly store;
    constructor(session: Session, store: MessageStore);
    handleGapFill(beginSeqNo: number, endSeqNo: number): Promise<void>;
    handleConnectionLoss(): Promise<void>;
}
