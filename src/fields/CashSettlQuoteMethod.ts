/**
 * The type of quote used to determine the cash settlement price.
 * tag: 40027
 * @readonly
 * @enum {number} (int)
 */
export enum CashSettlQuoteMethod {
  /** Bid */
  Bid = 0,
  /** Mid */
  Mid = 1,
  /** Offer */
  Offer = 2,
}
