/**
 * Specifies how the underlying price is determined at the point of option exercise. The underlying price may be set to the current settlement price, set to a special reference, set to the optimal value of the underlying during the defined period ("Look-back") or set to the average value of the underlying during the defined period ("Asian option").
 * tag: 1481
 * @readonly
 * @enum {number} (int)
 */
export enum UnderlyingPriceDeterminationMethod {
  /** Regular */
  Regular = 1,
  /** Special reference */
  SpecialReference = 2,
  /** Optimal value (Lookback) */
  OptimalValue = 3,
  /** Average value (Asian option) */
  AverageValue = 4,
}
