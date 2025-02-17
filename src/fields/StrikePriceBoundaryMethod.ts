/**
 * Specifies the boundary condition to be used for the strike price relative to the underlying price at the point of option exercise.
 * tag: 1479
 * @readonly
 * @enum {number} (int)
 */
export enum StrikePriceBoundaryMethod {
  /** Less than underlying price is in-the-money (ITM) */
  LessThan = 1,
  /** Less than or equal to the underlying price is in-the-money(ITM) */
  LessThanOrEqual = 2,
  /** Equal to the underlying price is in-the-money(ITM) */
  Equal = 3,
  /** Greater than or equal to underlying price is in-the-money(ITM) */
  GreaterThanOrEqual = 4,
  /** Greater than underlying is in-the-money(ITM) */
  GreaterThan = 5,
}
