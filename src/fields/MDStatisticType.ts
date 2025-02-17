/**
 * Type of statistic value.
 * tag: 2456
 * @readonly
 * @enum {number} (int)
 */
export enum MDStatisticType {
  Count = 1,
  AverageVolume = 2,
  TotalVolume = 3,
  Distribution = 4,
  Ratio = 5,
  Liquidity = 6,
  VWAP = 7,
  Volatility = 8,
  Duration = 9,
  Tick = 10,
  AverageValue = 11,
  TotalValue = 12,
  High = 13,
  Low = 14,
  Midpoint = 15,
  First = 16,
  Last = 17,
  Final = 18,
  ExchangeBest = 19,
  ExchangeBestWithVolume = 20,
  ConsolidatedBest = 21,
  ConsolidatedBestWithVolume = 22,
  /** Time weighted average price (TWAP) */
  TWAP = 23,
  AverageDuration = 24,
  AveragePrice = 25,
  TotalFees = 26,
  TotalBenefits = 27,
  MedianValue = 28,
  AverageLiquidity = 29,
  MedianDuration = 30,
}
