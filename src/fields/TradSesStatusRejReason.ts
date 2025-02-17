/**
 * Indicates the reason a Trading Session Status Request was rejected.
 * tag: 567
 * @readonly
 * @enum {number} (int)
 */
export enum TradSesStatusRejReason {
  /** Unknown or invalid TradingSessionID */
  UnknownOrInvalidTradingSessionID = 1,
  /** Other */
  Other = 99,
}
