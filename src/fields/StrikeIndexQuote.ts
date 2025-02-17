/**
 * The quote side from which the index price is to be determined.
 * tag: 2601
 * @readonly
 * @enum {number} (int)
 */
export enum StrikeIndexQuote {
  Bid = 0,
  /** Mid */
  Mid = 1,
  /** Offer */
  Offer = 2,
}
