/**
 * Indicates to recipient whether trade is clearing at execution prices LastPx(tag 31) or alternate clearing prices SideClearingTradePrice(tag 1597).
 * tag: 1598
 * @readonly
 * @enum {number} (int)
 */
export enum SideClearingTradePriceType {
  /** Trade Clearing at Execution Price */
  TradeClearingAtExecutionPrice = 0,
  /** Trade Clearing at Alternate Clearing Price */
  TradeClearingAtAlternateClearingPrice = 1,
}
