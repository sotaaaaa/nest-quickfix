import { Message, Field } from '../../message/message';
import { Fields, MsgType, ExecType, OrdStatus } from '../../fields';

export class ExecutionReportMessage extends Message {
  constructor(
    orderId: string,
    execId: string,
    symbol: string,
    side: string,
    orderQty: number,
    price: number,
    execType: ExecType,
    ordStatus: OrdStatus
  ) {
    super(
      new Field(Fields.MsgType, MsgType.ExecutionReport),
      new Field(Fields.OrderID, orderId),
      new Field(Fields.ExecID, execId),
      new Field(Fields.Symbol, symbol),
      new Field(Fields.Side, side),
      new Field(Fields.OrderQty, orderQty),
      new Field(Fields.Price, price),
      new Field(Fields.ExecType, execType),
      new Field(Fields.OrdStatus, ordStatus)
    );
  }
} 