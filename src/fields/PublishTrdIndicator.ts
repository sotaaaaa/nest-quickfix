/**
 * Indicates if a trade should be reported via a market reporting service.
 * tag: 852
 * @readonly
 * @enum {string} (Boolean)
 */
export enum PublishTrdIndicator {
  /** Do Not Report Trade */
  DoNotReportTrade = 'N',
  /** Report Trade */
  ReportTrade = 'Y',
}
