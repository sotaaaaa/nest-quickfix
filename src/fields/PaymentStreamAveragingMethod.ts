/**
 * When rate averaging is applicable, used to specify whether a weighted or unweighted average calculation method is to be used.
 * tag: 40806
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamAveragingMethod {
  /** Unweighted */
  Unweighted = 0,
  /** Weighted */
  Weighted = 1,
}
