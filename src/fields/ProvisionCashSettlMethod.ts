/**
 * An ISDA defined cash settlement method used for the determination of the applicable cash settlement amount. The method is defined in the 2006 ISDA Definitions, Section 18.3. Cash Settlement Methods, paragraph (e).
 * tag: 40108
 * @readonly
 * @enum {number} (int)
 */
export enum ProvisionCashSettlMethod {
  /** Cash price */
  CashPrice = 0,
  /** Cash price alternate */
  CashPriceAlternate = 1,
  /** Par yield curve adjusted */
  ParYieldCurveAdjusted = 2,
  /** Zero coupon yield curve adjusted */
  ZeroCouponYieldCurveAdjusted = 3,
  /** Par yield curve unadjusted */
  ParYieldCurveUnadjusted = 4,
  /** Cross currency */
  CrossCurrency = 5,
  /** Collateralized price */
  CollateralizedPrice = 6,
}
