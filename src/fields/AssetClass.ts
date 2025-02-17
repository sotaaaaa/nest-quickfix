/**
 * The broad asset category for assessing risk exposure.
 * tag: 1938
 * @readonly
 * @enum {number} (int)
 */
export enum AssetClass {
  /** Interest rate */
  InterestRate = 1,
  /** Currency */
  Currency = 2,
  /** Credit */
  Credit = 3,
  /** Equity */
  Equity = 4,
  /** Commodity */
  Commodity = 5,
  /** Other */
  Other = 6,
  /** Cash */
  Cash = 7,
  /** Debt */
  Debt = 8,
  Fund = 9,
  /** Loan facility */
  LoanFacility = 10,
  Index = 11,
}
