/**
 * Defines the type of peg.
 * tag: 1094
 * @readonly
 * @enum {number} (int)
 */
export enum PegPriceType {
  /** Last peg (last sale) */
  LastPeg = 1,
  /** Mid-price peg (midprice of inside quote) */
  MidPricePeg = 2,
  /** Opening peg */
  OpeningPeg = 3,
  /** Market peg */
  MarketPeg = 4,
  /** Primary peg (primary market - buy at bid or sell at offer) */
  PrimaryPeg = 5,
  /** Peg to VWAP */
  PegToVWAP = 7,
  /** Trailing Stop Peg */
  TrailingStopPeg = 8,
  /** Peg to Limit Price */
  PegToLimitPrice = 9,
  ShortSaleMinPricePeg = 10,
}
