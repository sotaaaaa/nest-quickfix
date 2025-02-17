/**
 * Specifies how the strike price is determined at the point of option exercise. The strike may be fixed throughout the life of the option, set at expiration to the value of the underlying, set to the average value of the underlying , or set to the optimal value of the underlying.
 * tag: 1478
 * @readonly
 * @enum {number} (int)
 */
export enum StrikePriceDeterminationMethod {
  /** Fixed strike (default if not specified) */
  FixedStrike = 1,
  /** Strike set at expiration to underlying or other value (lookback floating) */
  StrikeSetAtExpiration = 2,
  /** Strike set to average of underlying settlement price across the life of the option */
  StrikeSetToAverageAcrossLife = 3,
  /** Strike set to optimal value */
  StrikeSetToOptimalValue = 4,
}
