import { Message } from '../../message/message';
import { OrdType, TimeInForce, Side } from '../../fields';
export declare class OrderSingleMessage extends Message {
    constructor(clOrdId: string, symbol: string, side: Side, orderQty: number, price: number, orderType?: OrdType, timeInForce?: TimeInForce);
}
