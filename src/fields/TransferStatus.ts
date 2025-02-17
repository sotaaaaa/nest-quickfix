/**
 * Status of the transfer.
 * tag: 2442
 * @readonly
 * @enum {number} (int)
 */
export enum TransferStatus {
  /** Received */
  Received = 0,
  /** Rejected by intermediary */
  RejectedByIntermediary = 1,
  /** Accept pending */
  AcceptPending = 2,
  /** Accepted */
  Accepted = 3,
  /** Declined */
  Declined = 4,
  /** Cancelled */
  Cancelled = 5,
}
