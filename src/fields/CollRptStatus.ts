/**
 * The status of the collateral report.
 * tag: 2488
 * @readonly
 * @enum {number} (int)
 */
export enum CollRptStatus {
  /** Accepted (successfully processed) */
  Accepted = 0,
  /** Received (not yet processed) */
  Received = 1,
  /** Rejected */
  Rejected = 2,
}
