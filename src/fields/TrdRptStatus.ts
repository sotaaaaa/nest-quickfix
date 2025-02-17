/**
 * Trade Report Status
 * tag: 939
 * @readonly
 * @enum {number} (int)
 */
export enum TrdRptStatus {
  /** Accepted */
  Accepted = 0,
  /** Rejected */
  Rejected = 1,
  /** Cancelled */
  Cancelled = 2,
  /** Accepted with errors */
  AcceptedWithErrors = 3,
  /** Pending New */
  PendingNew = 4,
  /** Pending Cancel */
  PendingCancel = 5,
  /** Pending Replace */
  PendingReplace = 6,
  /** Terminated */
  Terminated = 7,
  PendingVerification = 8,
  DeemedVerified = 9,
  Verified = 10,
  Disputed = 11,
}
