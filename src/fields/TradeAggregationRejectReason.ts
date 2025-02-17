/**
 * Reason for trade aggregation request being rejected.
 * tag: 2791
 * @readonly
 * @enum {number} (int)
 */
export enum TradeAggregationRejectReason {
  /** Unknown order(s) */
  UnknownOrders = 0,
  /** Unknown execution/fill(s) */
  UnknownExecutionFills = 1,
  /** Other */
  Other = 99,
}
