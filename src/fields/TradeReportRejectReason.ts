export enum TradeReportRejectReason {
  /** Successful (default) */
  Successful = 0,
  /** Invalid party information */
  InvalidPartyInformation = 1,
  /** Unknown instrument */
  UnknownInstrument = 2,
  /** Unauthorized to report trades */
  UnauthorizedToReportTrades = 3,
  /** Invalid trade type */
  InvalidTradeType = 4,
  /** Price exceeds current price band */
  PriceExceedsCurrentPriceBand = 5,
  /** Reference price not available */
  ReferencePriceNotAvailable = 6,
  /** Notional value exceeds threshold */
  NotionalValueExceedsThreshold = 7,
  /** Other */
  Other = 99,
}
