/**
 * The reason for rejecting the PartyRiskLimitsReport(35=CM) or PartyRiskLimitsUpdateReport(35=CR).
 * tag: 2317
 * @readonly
 * @enum {number} (int)
 */
export enum RiskLimitReportRejectReason {
  /** Unknown RiskLimitReportID(1667) */
  UnkRiskLmtRprtID = 0,
  /** Unknown party */
  UnkPty = 1,
  /** Other */
  Other = 99,
}
