/**
 * The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate).
 * tag: 40807
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamNegativeRateTreatment {
  /** Zero interest rate method */
  ZeroInterestRateMethod = 0,
  /** Negative interest rate method */
  NegativeInterestRateMethod = 1,
}
