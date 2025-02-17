/**
 * Identifies status of the request being responded to.
 * tag: 2813
 * @readonly
 * @enum {number} (int)
 */
export enum PayRequestStatus {
  /** Received, not yet processed */
  Received = 0,
  /** Accepted */
  Accepted = 1,
  /** Rejected */
  Rejected = 2,
  Disputed = 3,
}
