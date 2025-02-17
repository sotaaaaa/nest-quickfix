/**
 * Method used for negotiation of contract price.
 * tag: 1740
 * @readonly
 * @enum {number} (int)
 */
export enum TradePriceNegotiationMethod {
  /** Percent of par */
  PercentPar = 0,
  /** Deal spread */
  DealSpread = 1,
  /** Upfront points */
  UpfrontPnts = 2,
  /** Upfront amount */
  UpfrontAmt = 3,
  /** Percent of par and upfront amount */
  ParUpfrontAmt = 4,
  /** Deal spread and upfront amount */
  SpreadUpfrontAmt = 5,
  /** Upfront points and upfront amount */
  UpfrontPntsAmt = 6,
}
