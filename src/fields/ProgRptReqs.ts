/**
 * Code to identify the desired frequency of progress reports.
 * tag: 414
 * @readonly
 * @enum {number} (int)
 */
export enum ProgRptReqs {
  /** Buy-side explicitly requests status using Statue Request (default), the sell-side firm can, however, send a DONE status List STatus Response in an unsolicited fashion */
  BuySideRequests = 1,
  /** Sell-side periodically sends status using List Status. Period optionally specified in ProgressPeriod. */
  SellSideSends = 2,
  /** Real-time execution reports (to be discourage) */
  RealTimeExecutionReports = 3,
}
