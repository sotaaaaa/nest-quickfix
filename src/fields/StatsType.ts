/**
 * Type of statistics
 * tag: 1176
 * @readonly
 * @enum {number} (int)
 */
export enum StatsType {
  /** Exchange Last */
  ExchangeLast = 1,
  /** High / Low Price */
  High = 2,
  /** Average Price (VWAP, TWAP ... ) */
  AveragePrice = 3,
  /** Turnover (Price * Qty) */
  Turnover = 4,
}
