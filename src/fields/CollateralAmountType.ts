/**
 * The type of value in CurrentCollateralAmount(1704).
 * tag: 2632
 * @readonly
 * @enum {number} (int)
 */
export enum CollateralAmountType {
  /** Market valuation (the default) */
  MarketValuation = 0,
  /** Portfolio value before processing pledge request */
  PortfolioValue = 1,
  /** Value confirmed as "locked-up" for processing a pledge request */
  ValueConfirmed = 2,
  /** Credit value of collateral at CCP processing a pledge request */
  CollateralCreditValue = 3,
  AdditionalCollateralValue = 4,
  EstimatedMarketValuation = 5,
}
