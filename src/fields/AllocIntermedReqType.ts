/**
 * Response to allocation to be communicated to a counterparty through an intermediary, i.e. clearing house. Used in conjunction with AllocType = "Request to Intermediary" and AllocReportType = "Request to Intermediary"
 * tag: 808
 * @readonly
 * @enum {number} (int)
 */
export enum AllocIntermedReqType {
  /** Pending Accept */
  PendingAccept = 1,
  /** Pending Release */
  PendingRelease = 2,
  /** Pending Reversal */
  PendingReversal = 3,
  /** Accept */
  Accept = 4,
  /** Block Level Reject */
  BlockLevelReject = 5,
  /** Account Level Reject */
  AccountLevelReject = 6,
}
