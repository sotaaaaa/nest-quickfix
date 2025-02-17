/**
 * Reason the trade match report submission was rejected.
 * tag: 1897
 * @readonly
 * @enum {number} (int)
 */
export enum TradeMatchRejectReason {
  /** Successful */
  Successful = 0,
  /** Invalid party information */
  InvalidPartyInformation = 1,
  /** Unknown instrument */
  UnknownInstrument = 2,
  /** Not authorized to report trades */
  Unauthorized = 3,
  /** Invalid trade type */
  InvalidTradeType = 4,
  /** Other */
  Other = 99,
}
