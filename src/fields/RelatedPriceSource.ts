/**
 * Source for the price of a related entity, e.g. price of the underlying instrument in an Underlying Price Contingency (UPC) order. Can be used together with RelatedHighPrice (1819) and/or RelatedLowPrice (1820).
 * tag: 1821
 * @readonly
 * @enum {number} (int)
 */
export enum RelatedPriceSource {
  /** NBB (National Best Bid) */
  NBBid = 1,
  /** NBO (National Best Offer) */
  NBOffer = 2,
}
