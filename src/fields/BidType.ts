/**
 * Code to identify the type of Bid Request.
 * tag: 394
 * @readonly
 * @enum {number} (int)
 */
export enum BidType {
  /** "Non Disclosed" style (e.g. US/European) */
  NonDisclosed = 1,
  /** "Disclosed" style (e.g. Japanese) */
  Disclosed = 2,
  /** No bidding process */
  NoBiddingProcess = 3,
}
