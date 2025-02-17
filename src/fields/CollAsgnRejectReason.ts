/**
 * Collateral Assignment Reject Reason
 * tag: 906
 * @readonly
 * @enum {number} (int)
 */
export enum CollAsgnRejectReason {
  /** Unknown deal (order / trade) */
  UnknownDeal = 0,
  /** Unknown or invalid instrument */
  UnknownOrInvalidInstrument = 1,
  /** Unauthorized transaction */
  UnauthorizedTransaction = 2,
  /** Insufficient collateral */
  InsufficientCollateral = 3,
  /** Invalid type of collateral */
  InvalidTypeOfCollateral = 4,
  /** Excessive substitution */
  ExcessiveSubstitution = 5,
  /** Other */
  Other = 99,
}
