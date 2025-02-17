/**
 * Status of the report being responded to.
 * tag: 2973
 * @readonly
 * @enum {number} (int)
 */
export enum SettlStatusReportStatus {
  /** Received, not yet processed */
  Received = 0,
  /** Accepted */
  Accepted = 1,
  Rejected = 2,
}
