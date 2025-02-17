/**
 * The average pricing model used for block trades.
 * tag: 2763
 * @readonly
 * @enum {number} (int)
 */
export enum AveragePriceType {
  TimeWeightedAveragePrice = 0,
  VolumeWeightedAveragePrice = 1,
  PercentOfVolumeAveragePrice = 2,
  LimitOrderAveragePrice = 3,
}
