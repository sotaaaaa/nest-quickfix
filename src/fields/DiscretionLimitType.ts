/**
 * Type of Discretion Limit
 * tag: 843
 * @readonly
 * @enum {number} (int)
 */
export enum DiscretionLimitType {
  /** Or better (default) - price improvement allowed */
  OrBetter = 0,
  /** Strict - limit is a strict limit */
  Strict = 1,
  /** Or worse - for a buy the discretion price is a minimum and for a sell the discretion price is a maximum (for use for orders which have a price range) */
  OrWorse = 2,
}
