/**
 * Status of Position Maintenance Request
 * tag: 722
 * @readonly
 * @enum {number} (int)
 */
export enum PosMaintStatus {
  /** Accepted */
  Accepted = 0,
  /** Accepted With Warnings */
  AcceptedWithWarnings = 1,
  /** Rejected */
  Rejected = 2,
  /** Completed */
  Completed = 3,
  /** Completed With Warnings */
  CompletedWithWarnings = 4,
}
