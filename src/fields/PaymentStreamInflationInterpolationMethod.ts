/**
 * The method used when calculating the Inflation Index Level from multiple points - the most common is Linear.
 * tag: 40811
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamInflationInterpolationMethod {
  /** None */
  None = 0,
  /** Linear zero yield */
  LinearZeroYield = 1,
}
