/**
 * Used to indicate the status of a post-trade payment.
 * tag: 2823
 * @readonly
 * @enum {number} (int)
 */
export enum PostTradePaymentStatus {
  New = 0,
  Initiated = 1,
  Pending = 2,
  Confirmed = 3,
  Rejected = 4,
}
