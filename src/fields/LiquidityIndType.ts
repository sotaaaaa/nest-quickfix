/**
 * Code to identify the type of liquidity indicator.
 * tag: 409
 * @readonly
 * @enum {number} (int)
 */
export enum LiquidityIndType {
  /** 5-day moving average */
  FiveDayMovingAverage = 1,
  /** 20-day moving average */
  TwentyDayMovingAverage = 2,
  /** Normal market size */
  NormalMarketSize = 3,
  /** Other */
  Other = 4,
}
