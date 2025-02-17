/**
 * Specifies the type of valuation method applied.
 * tag: 1197
 * @readonly
 * @enum {string} (String)
 */
export enum ValuationMethod {
  /** premium style */
  PremiumStyle = 'EQTY',
  /** futures style mark-to-market */
  FuturesStyleMarkToMarket = 'FUT',
  /** futures style with an attached cash adjustment */
  FuturesStyleWithAnAttachedCashAdjustment = 'FUTDA',
  /** CDS style collateralization of market to market and coupon */
  CDSStyleCollateralization = 'CDS',
  /** CDS in delivery - use recovery rate to calculate obligation */
  CDSInDeliveryUseRecoveryRateToCalculate = 'CDSD',
}
