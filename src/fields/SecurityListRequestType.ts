/**
 * Identifies the type/criteria of Security List Request
 * tag: 559
 * @readonly
 * @enum {number} (int)
 */
export enum SecurityListRequestType {
  /** Symbol */
  Symbol = 0,
  /** SecurityType and/or CFICode */
  SecurityTypeAnd = 1,
  /** Product */
  Product = 2,
  /** TradingSessionID */
  TradingSessionID = 3,
  /** All Securities */
  AllSecurities = 4,
  /** MarketID or MarketID + MarketSegmentID */
  MarketIDOrMarketID = 5,
}
