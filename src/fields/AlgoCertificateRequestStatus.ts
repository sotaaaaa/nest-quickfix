/**
 * Status of the AlgoCertificateRequest(35=EH) message being responded to.
 * tag: 3017
 * @readonly
 * @enum {number} (int)
 */
export enum AlgoCertificateRequestStatus {
  /** Received, not yet processed */
  Received = 0,
  /** Accepted */
  Accepted = 1,
  Rejected = 2,
}
