/**
 * Type of Peg Limit
 * tag: 837
 * @readonly
 * @enum {number} (int)
 */
export enum PegLimitType {
  /** Or better (default) - price improvement allowed */
  OrBetter = 0,
  /** Strict - limit is a strict limit */
  Strict = 1,
  /** Or worse - for a buy the peg limit is a minimum and for a sell the peg limit is a maximum (for use for orders which have a price range) */
  OrWorse = 2,
}
