/**
 * Calculation method used to determine settlement price.
 * tag: 2451
 * @readonly
 * @enum {number} (int)
 */
export enum SettlPriceDeterminationMethod {
  /** Unknown */
  Unknown = 0,
  /** Last trade price */
  LastTradePrice = 1,
  /** Last bid price */
  LastBidPrice = 2,
  /** Last offer price */
  LastOfferPrice = 3,
  MidPrice = 4,
  AverageLastTradePrice = 5,
  AverageLastTradePeriod = 6,
  UnderlyingPrice = 7,
  CalculatedPrice = 8,
  ManualPrice = 9,
}
