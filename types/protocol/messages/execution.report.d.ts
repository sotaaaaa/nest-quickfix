import { Message } from '../../message/message';
import { ExecType, OrdStatus } from '../../fields';
export declare class ExecutionReportMessage extends Message {
    constructor(orderId: string, execId: string, symbol: string, side: string, orderQty: number, price: number, execType: ExecType, ordStatus: OrdStatus);
}
