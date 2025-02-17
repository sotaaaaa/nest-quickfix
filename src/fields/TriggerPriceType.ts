/**
 * The type of price that the trigger is compared to.
 * tag: 1107
 * @readonly
 * @enum {string} (char)
 */
export enum TriggerPriceType {
  /** Best Offer */
  BestOffer = '1',
  /** Last Trade */
  LastTrade = '2',
  /** Best Bid */
  BestBid = '3',
  /** Best Bid or Last Trade */
  BestBidOrLastTrade = '4',
  /** Best Offer or Last Trade */
  BestOfferOrLastTrade = '5',
  /** Best Mid */
  BestMid = '6',
}
