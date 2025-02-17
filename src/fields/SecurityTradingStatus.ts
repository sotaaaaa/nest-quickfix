/**
 * Identifies the trading status applicable to the transaction.
 * tag: 326
 * @readonly
 * @enum {number} (int)
 */
export enum SecurityTradingStatus {
  /** Opening delay */
  OpeningDelay = 1,
  /** Trading halt */
  TradingHalt = 2,
  /** Resume */
  Resume = 3,
  /** No Open / No Resume */
  NoOpen = 4,
  /** Price indication */
  PriceIndication = 5,
  /** Trading Range Indication */
  TradingRangeIndication = 6,
  /** Market Imbalance Buy */
  MarketImbalanceBuy = 7,
  /** Market Imbalance Sell */
  MarketImbalanceSell = 8,
  /** Market on Close Imbalance Buy */
  MarketOnCloseImbalanceBuy = 9,
  /** Market on Close Imbalance Sell */
  MarketOnCloseImbalanceSell = 10,
  /** No Market Imbalance */
  NoMarketImbalance = 12,
  /** No Market on Close Imbalance */
  NoMarketOnCloseImbalance = 13,
  /** ITS Pre-opening */
  ITSPreOpening = 14,
  /** New Price Indication */
  NewPriceIndication = 15,
  /** Trade Dissemination Time */
  TradeDisseminationTime = 16,
  /** Ready to trade (start of session) */
  ReadyToTrade = 17,
  /** Not available for trading (end of session) */
  NotAvailableForTrading = 18,
  /** Not traded on this market */
  NotTradedOnThisMarket = 19,
  /** Unknown or Invalid */
  UnknownOrInvalid = 20,
  /** Pre-open */
  PreOpen = 21,
  /** Opening Rotation */
  OpeningRotation = 22,
  /** Fast Market */
  FastMarket = 23,
  /** Pre-Cross - system is in a pre-cross state allowing market to respond to either side of cross */
  PreCross = 24,
  /** Cross - system has crossed a percentage of the orders and allows market to respond prior to crossing remaining portion */
  Cross = 25,
  /** Post-close */
  PostClose = 26,
  /** No-cancel */
  NoCancel = 27,
}
