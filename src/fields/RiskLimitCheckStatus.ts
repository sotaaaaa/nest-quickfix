/**
 * Indicates the status of the risk limit check performed on a trade.
 * tag: 2343
 * @readonly
 * @enum {number} (int)
 */
export enum RiskLimitCheckStatus {
  Accepted = 0,
  Rejected = 1,
  ClaimRequired = 2,
  PreDefinedLimitCheckSucceeded = 3,
  PreDefinedLimitCheckFailed = 4,
  PreDefinedAutoAcceptRuleInvoked = 5,
  PreDefinedAutoRejectRuleInvoked = 6,
  AcceptedByClearingFirm = 7,
  RejectedByClearingFirm = 8,
  Pending = 9,
  AcceptedByCreditHub = 10,
  RejectedByCreditHub = 11,
  PendingCreditHubCheck = 12,
  AcceptedByExecVenue = 13,
  RejectedByExecVenue = 14,
}
