/**
 * Specified how the TradeCaptureReport(35=AE) should be handled by the respondent.
 * tag: 1123
 * @readonly
 * @enum {string} (char)
 */
export enum TradeHandlingInstr {
  /** Trade confirmation */
  TradeConfirmation = '0',
  /** Two-party report */
  TwoPartyReport = '1',
  /** One-party report for matching */
  OnePartyReportForMatching = '2',
  OnePartyReportForPassThrough = '3',
  /** Automated floor order routing */
  AutomatedFloorOrderRouting = '4',
  /** Two-party report for claim */
  TwoPartyReportForClaim = '5',
  /** One-party report */
  OnePartyReport = '6',
  ThirdPtyRptForPassThrough = '7',
  OnePartyReportAutoMatch = '8',
}
