/**
 * Specifies the type of loan when the credit default swap's reference obligation is a loan.
 * tag: 1955
 * @readonly
 * @enum {number} (int)
 */
export enum LoanFacility {
  /** Bridge loan */
  BridgeLoan = 0,
  /** Letter of credit */
  LetterOfCredit = 1,
  /** Revolving loan */
  RevolvingLoan = 2,
  /** Swingline funding */
  SwinglineFunding = 3,
  /** Term loan */
  TermLoan = 4,
  /** Trade claim */
  TradeClaim = 5,
}
