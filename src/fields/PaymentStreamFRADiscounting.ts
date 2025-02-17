/**
 * The method of Forward Rate Agreement (FRA) discounting, if any, that will apply.
 * tag: 40816
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamFRADiscounting {
  /** None */
  None = 0,
  /** International Swaps and Derivatives Association (ISDA) */
  ISDA = 1,
  /** Australian Financial Markets Association (AFMA) */
  AFMA = 2,
}
