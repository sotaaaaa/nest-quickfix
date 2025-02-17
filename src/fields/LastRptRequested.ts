/**
 * Indicates whether this message is the last report message in response to a request message, e.g. OrderMassStatusRequest(35=AF), TradeCaptureReportRequest(35=AD).
 * tag: 912
 * @readonly
 * @enum {string} (Boolean)
 */
export enum LastRptRequested {
  /** Not last message */
  NotLastMessage = 'N',
  /** Last message */
  LastMessage = 'Y',
}
