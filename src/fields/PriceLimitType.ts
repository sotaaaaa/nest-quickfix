/**
 * Describes the how the price limits are expressed.
 * tag: 1306
 * @readonly
 * @enum {number} (int)
 */
export enum PriceLimitType {
  /** Price (default) */
  Price = 0,
  /** Ticks */
  Ticks = 1,
  /** Percentage */
  Percentage = 2,
}
