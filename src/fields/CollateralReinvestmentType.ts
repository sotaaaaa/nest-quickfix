/**
 * Indicates the type of investment the cash collateral is re-invested in.
 * tag: 2844
 * @readonly
 * @enum {number} (int)
 */
export enum CollateralReinvestmentType {
  MoneyMarketFund = 0,
  OtherComingledPool = 1,
  RepoMarket = 2,
  DirectPurchaseOfSecurities = 3,
  OtherInvestments = 4,
}
