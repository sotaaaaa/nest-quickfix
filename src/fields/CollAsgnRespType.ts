/**
 * Type of collateral assignment response.
 * tag: 905
 * @readonly
 * @enum {number} (int)
 */
export enum CollAsgnRespType {
  /** Received */
  Received = 0,
  /** Accepted */
  Accepted = 1,
  /** Declined */
  Declined = 2,
  /** Rejected */
  Rejected = 3,
  TransactionPending = 4,
  TransactionCompletedWithWarning = 5,
}
