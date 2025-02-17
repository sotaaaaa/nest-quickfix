/**
 * Used to indicate the status of the trade submission (not the trade report)
 * tag: 1523
 * @readonly
 * @enum {number} (int)
 */
export enum TrdAckStatus {
  /** Accepted */
  Accepted = 0,
  /** Rejected */
  Rejected = 1,
  /** Received */
  Received = 2,
}
