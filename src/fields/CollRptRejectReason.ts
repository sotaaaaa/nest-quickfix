/**
 * Reject reason code for rejecting the collateral report.
 * tag: 2487
 * @readonly
 * @enum {number} (int)
 */
export enum CollRptRejectReason {
  /** Unknown trade or transaction */
  UnknownTrade = 0,
  /** Unknown or invalid instrument */
  UnknownInstrument = 1,
  /** Unknown or invalid counterparty */
  UnknownCounterparty = 2,
  /** Unknown or invalid position */
  UnknownPosition = 3,
  /** Unacceptable or invalid type of collateral */
  UnacceptableCollateral = 4,
  /** Other */
  Other = 99,
}
