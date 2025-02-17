/**
 * Type of Trade Report
 * tag: 856
 * @readonly
 * @enum {number} (int)
 */
export enum TradeReportType {
  /** Submit */
  Submit = 0,
  /** Alleged */
  Alleged = 1,
  /** Accept */
  Accept = 2,
  /** Decline */
  Decline = 3,
  Addendum = 4,
  No = 5,
  /** Trade Report Cancel */
  TradeReportCancel = 6,
  /** (Locked-In) Trade Break */
  LockedIn = 7,
  /** Defaulted */
  Defaulted = 8,
  /** Invalid CMTA */
  InvalidCMTA = 9,
  /** Pended */
  Pended = 10,
  /** Alleged New */
  AllegedNew = 11,
  /** Alleged Addendum */
  AllegedAddendum = 12,
  /** Alleged No/Was */
  AllegedNo = 13,
  /** Alleged Trade Report Cancel */
  AllegedTradeReportCancel = 14,
  /** Alleged (Locked-In) Trade Break */
  AllegedTradeBreak = 15,
  Verify = 16,
  Dispute = 17,
  NonMaterialUpdate = 18,
}
