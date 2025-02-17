/**
 * Used to indicate the status of the trade match report submission.
 * tag: 1896
 * @readonly
 * @enum {number} (int)
 */
export enum TradeMatchAckStatus {
  /** Received, not yet processed */
  ReceivedNotProcessed = 0,
  /** Accepted */
  Accepted = 1,
  /** Rejected */
  Rejected = 2,
}
