import { Message, Field } from '../../message/message';
import { Fields, MsgType, OrdType, TimeInForce, Side } from '../../fields';

export class OrderSingleMessage extends Message {
  constructor(
    clOrdId: string,
    symbol: string,
    side: Side,
    orderQty: number,
    price: number,
    orderType: OrdType = OrdType.Limit,
    timeInForce: TimeInForce = TimeInForce.Day
  ) {
    super(
      new Field(Fields.MsgType, MsgType.NewOrderSingle),
      new Field(Fields.ClOrdID, clOrdId),
      new Field(Fields.Symbol, symbol),
      new Field(Fields.Side, side),
      new Field(Fields.OrderQty, orderQty),
      new Field(Fields.Price, price),
      new Field(Fields.OrdType, orderType),
      new Field(Fields.TimeInForce, timeInForce)
    );
  }
} 