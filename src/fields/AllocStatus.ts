/**
 * Identifies status of allocation.
 * tag: 87
 * @readonly
 * @enum {number} (int)
 */
export enum AllocStatus {
  /** Accepted (successfully processed) */
  Accepted = 0,
  /** Block level reject */
  BlockLevelReject = 1,
  /** Account level reject */
  AccountLevelReject = 2,
  /** Received (received not yet processed) */
  Received = 3,
  /** Incomplete */
  Incomplete = 4,
  /** Rejected by intermediary */
  RejectedByIntermediary = 5,
  /** Allocation pending */
  AllocationPending = 6,
  /** Reversed */
  Reversed = 7,
  CancelledByIntermediary = 8,
  /** Claimed */
  Claimed = 9,
  /** Refused */
  Refused = 10,
  /** Pending give-up approval */
  PendingGiveUpApproval = 11,
  /** Cancelled */
  Cancelled = 12,
  /** Pending take-up approval */
  PendingTakeUpApproval = 13,
  /** Reversal pending */
  ReversalPending = 14,
}
