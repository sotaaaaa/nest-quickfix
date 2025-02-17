/**
 * Average pricing indicator.
 * tag: 819
 * @readonly
 * @enum {number} (int)
 */
export enum AvgPxIndicator {
  /** No average pricing */
  NoAveragePricing = 0,
  /** Trade is part of an average price group identified by the AvgPxGroupID(1731) */
  Trade = 1,
  /** Last trade of the average price group identified by the AvgPxGroupID(1731) */
  LastTrade = 2,
  NotionalValueAveragePxGroupTrade = 3,
  /** Trade is average priced */
  AveragePricedTrade = 4,
}
