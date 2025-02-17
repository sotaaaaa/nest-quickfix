/**
 * Indicates the status of the risk limit check request.
 * tag: 2325
 * @readonly
 * @enum {number} (int)
 */
export enum RiskLimitCheckRequestStatus {
  Approved = 0,
  PartiallyApproved = 1,
  /** Rejected */
  Rejected = 2,
  /** Approval pending */
  ApprovalPending = 3,
  /** Cancelled */
  Cancelled = 4,
}
