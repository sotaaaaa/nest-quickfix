/**
 * Identifies whether the rate spread is an absolute value to be added to the index rate or a percentage of the index rate.
 * tag: 41206
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamRateSpreadType {
  /** Absolute */
  Absolute = 0,
  /** Percentage */
  Percentage = 1,
}
