/**
 * Status of the report being responded to.
 * tag: 3021
 * @readonly
 * @enum {number} (int)
 */
export enum AlgoCertificateReportStatus {
  /** Received, not yet processed */
  Received = 0,
  /** Accepted */
  Accepted = 1,
  Rejected = 2,
}
