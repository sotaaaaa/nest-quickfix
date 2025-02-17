/**
 * Type of Security Definition Request.
 * tag: 321
 * @readonly
 * @enum {number} (int)
 */
export enum SecurityRequestType {
  /** Request Security identity and specifications */
  RequestSecurityIdentityAndSpecifications = 0,
  /** Request Security identity for the specifications provided (name of the security is not supplied) */
  RequestSecurityIdentityForSpecifications = 1,
  /** Request List Security Types */
  RequestListSecurityTypes = 2,
  /** Request List Securities (can be qualified with Symbol, SecurityType, TradingSessionID, SecurityExchange. If provided then only list Securities for the specific type.) */
  RequestListSecurities = 3,
  /** Symbol */
  Symbol = 4,
  /** SecurityType and or CFICode */
  SecurityTypeAndOrCFICode = 5,
  /** Product */
  Product = 6,
  /** TradingSessionID */
  TradingSessionID = 7,
  /** All Securities */
  AllSecurities = 8,
  /** MarketID or MarketID + MarketSegmentID */
  MarketIDOrMarketID = 9,
}
