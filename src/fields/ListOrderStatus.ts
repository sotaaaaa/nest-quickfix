/**
 * Code to represent the status of a list order.
 * tag: 431
 * @readonly
 * @enum {number} (int)
 */
export enum ListOrderStatus {
  /** In bidding process */
  InBiddingProcess = 1,
  /** Received for execution */
  ReceivedForExecution = 2,
  /** Executing */
  Executing = 3,
  /** Cancelling */
  Cancelling = 4,
  /** Alert */
  Alert = 5,
  /** All Done */
  AllDone = 6,
  /** Reject */
  Reject = 7,
}
