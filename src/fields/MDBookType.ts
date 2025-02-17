/**
 * Describes the type of book for which the feed is intended. Used when multiple feeds are provided over the same connection
 * tag: 1021
 * @readonly
 * @enum {number} (int)
 */
export enum MDBookType {
  /** Top of Book */
  TopOfBook = 1,
  /** Price Depth */
  PriceDepth = 2,
  /** Order Depth */
  OrderDepth = 3,
}
