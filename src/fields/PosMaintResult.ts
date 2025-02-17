/**
 * Result of Position Maintenance Request.
 * tag: 723
 * @readonly
 * @enum {number} (int)
 */
export enum PosMaintResult {
  /** Successful Completion - no warnings or errors */
  SuccessfulCompletion = 0,
  /** Rejected */
  Rejected = 1,
  /** Other */
  Other = 99,
}
