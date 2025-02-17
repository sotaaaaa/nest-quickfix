/**
 * Status of Request for Positions
 * tag: 729
 * @readonly
 * @enum {number} (int)
 */
export enum PosReqStatus {
  /** Completed */
  Completed = 0,
  /** Completed With Warnings */
  CompletedWithWarnings = 1,
  /** Rejected */
  Rejected = 2,
}
