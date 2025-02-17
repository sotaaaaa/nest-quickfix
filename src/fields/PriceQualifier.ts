/**
 * Qualifier for price. May be used when the price needs to be explicitly qualified.
 * tag: 2710
 * @readonly
 * @enum {number} (int)
 */
export enum PriceQualifier {
  AccruedInterestIsFactored = 0,
  TaxIsFactored = 1,
  BondAmortizationIsFactored = 2,
}
