/**
 * Type of reference obligation for credit derivatives contracts.
 * tag: 2012
 * @readonly
 * @enum {string} (String)
 */
export enum UnderlyingObligationType {
  /** Bond */
  Bond = '0',
  /** Convertible bond */
  ConvertibleBond = '1',
  /** Mortgage */
  Mortgage = '2',
  /** Loan */
  Loan = '3',
}
