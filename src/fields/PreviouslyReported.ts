/**
 * Indicates if the transaction was previously reported to the counterparty or market.
 * tag: 570
 * @readonly
 * @enum {string} (Boolean)
 */
export enum PreviouslyReported {
  NotReportedToCounterparty = 'N',
  PreviouslyReportedToCounterparty = 'Y',
}
