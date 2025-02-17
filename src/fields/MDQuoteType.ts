/**
 * Identifies market data quote type.
 * tag: 1070
 * @readonly
 * @enum {number} (int)
 */
export enum MDQuoteType {
  /** Indicative */
  Indicative = 0,
  /** Tradeable */
  Tradeable = 1,
  /** Restricted Tradeable */
  RestrictedTradeable = 2,
  /** Counter */
  Counter = 3,
  /** Indicative and Tradeable */
  IndicativeAndTradeable = 4,
}
