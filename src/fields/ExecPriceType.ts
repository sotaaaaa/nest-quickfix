/**
 * For CIV - Identifies how the execution price LastPx (31) was calculated from the fund unit/share price(s) calculated at the fund valuation point.
 * tag: 484
 * @readonly
 * @enum {string} (char)
 */
export enum ExecPriceType {
  /** Bid price */
  BidPrice = 'B',
  /** Creation price */
  CreationPrice = 'C',
  /** Creation price plus adjustment percent */
  CreationPricePlusAdjustmentPercent = 'D',
  /** Creation price plus adjustment amount */
  CreationPricePlusAdjustmentAmount = 'E',
  /** Offer price */
  OfferPrice = 'O',
  /** Offer price minus adjustment percent */
  OfferPriceMinusAdjustmentPercent = 'P',
  /** Offer price minus adjustment amount */
  OfferPriceMinusAdjustmentAmount = 'Q',
  /** Single price */
  SinglePrice = 'S',
}
