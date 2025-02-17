/**
 * Status of Collateral Inquiry
 * tag: 945
 * @readonly
 * @enum {number} (int)
 */
export enum CollInquiryStatus {
  /** Accepted */
  Accepted = 0,
  /** Accepted With Warnings */
  AcceptedWithWarnings = 1,
  /** Completed */
  Completed = 2,
  /** Completed With Warnings */
  CompletedWithWarnings = 3,
  /** Rejected */
  Rejected = 4,
}
