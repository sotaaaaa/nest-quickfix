/**
 * Status of the TestActionRequest(35=EN) message being responded to.
 * tag: 3068
 * @readonly
 * @enum {number} (int)
 */
export enum TestActionRequestStatus {
  /** Received, not yet processed */
  Received = 0,
  /** Accepted */
  Accepted = 1,
  Rejected = 2,
}
