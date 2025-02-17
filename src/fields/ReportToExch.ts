/**
 * Identifies party of trade responsible for exchange reporting.
 * tag: 113
 * @readonly
 * @enum {string} (Boolean)
 */
export enum ReportToExch {
  /** Indicates the party sending message will report trade */
  SenderReports = 'N',
  /** Indicates the party receiving message must report trade */
  ReceiverReports = 'Y',
}
