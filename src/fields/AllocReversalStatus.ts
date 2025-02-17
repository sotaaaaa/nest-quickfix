/**
 * Identifies the status of a reversal transaction.
 * tag: 1738
 * @readonly
 * @enum {number} (int)
 */
export enum AllocReversalStatus {
  /** Completed */
  Completed = 0,
  /** Refused */
  Refused = 1,
  /** Cancelled */
  Cancelled = 2,
}
