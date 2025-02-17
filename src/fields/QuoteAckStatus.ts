/**
 * Acknowledgement status of a Quote(35=S) or QuoteCancel(35=Z) message submission.
 * tag: 1865
 * @readonly
 * @enum {number} (int)
 */
export enum QuoteAckStatus {
  /** Received, not yet processed */
  ReceivedNotYetProcessed = 0,
  /** Accepted */
  Accepted = 1,
  /** Rejected */
  Rejected = 2,
}
