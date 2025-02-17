/**
 * Defines the type of contingency.
 * tag: 1385
 * @readonly
 * @enum {number} (int)
 */
export enum ContingencyType {
  /** One Cancels the Other (OCO) */
  OneCancelsTheOther = 1,
  /** One Triggers the Other (OTO) */
  OneTriggersTheOther = 2,
  /** One Updates the Other (OUO) - Absolute Quantity Reduction */
  OneUpdatesTheOtherAbsolute = 3,
  /** One Updates the Other (OUO) - Proportional Quantity Reduction */
  OneUpdatesTheOtherProportional = 4,
  /** Bid and Offer */
  BidAndOffer = 5,
  /** Bid and Offer OCO */
  BidAndOfferOCO = 6,
}
