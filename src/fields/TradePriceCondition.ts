/**
 * Price conditions in effect at the time of the trade. Multiple price conditions can be in effect at the same time. Price conditions are usually required to be reported in markets that have regulations on price execution at a market or national best bid or offer, and the trade price differs from the best bid or offer.
 * tag: 1839
 * @readonly
 * @enum {number} (int)
 */
export enum TradePriceCondition {
  /** Special cum dividend (CD) */
  SpecialCumDividend = 0,
  /** Special cum rights (CR) */
  SpecialCumRights = 1,
  /** Special ex dividend (XD) */
  SpecialExDividend = 2,
  /** Special ex rights (XR) */
  SpecialExRights = 3,
  /** Special cum coupon (CC) */
  SpecialCumCoupon = 4,
  /** Special cum capital repayments (CP) */
  SpecialCumCapitalRepayments = 5,
  /** Special ex coupon (XC) */
  SpecialExCoupon = 6,
  /** Special ex capital repayments (XP) */
  SpecialExCapitalRepayments = 7,
  /** Cash settlement (CS) */
  CashSettlement = 8,
  /** Special cum bonus (CB) */
  SpecialCumBonus = 9,
  SpecialPrice = 10,
  /** Special ex bonus (XB) */
  SpecialExBonus = 11,
  /** Guaranteed delivery (GD) */
  GuaranteedDelivery = 12,
  SpecialDividend = 13,
  PriceImprovement = 14,
  NonPriceFormingTrade = 15,
  TradeExemptedFromTradingObligation = 16,
  PricePending = 17,
  PriceNotApplicable = 18,
}
