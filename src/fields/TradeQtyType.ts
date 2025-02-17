/**
 * Indicates the type of trade quantity in TradeQty(1843).
 * tag: 1842
 * @readonly
 * @enum {number} (int)
 */
export enum TradeQtyType {
  /** Cleared quantity */
  ClearedQuantity = 0,
  /** Long side claimed quantity */
  LongSideClaimedQuantity = 1,
  /** Short side claimed quantity */
  ShortSideClaimedQuantity = 2,
  /** Long side rejected quantity */
  LongSideRejectedQuantity = 3,
  /** Short side rejected quantity */
  ShortSideRejectedQuantity = 4,
  /** Pending quantity */
  PendingQuantity = 5,
  /** Transaction quantity */
  TransactionQuantity = 6,
  RemainingQuantity = 7,
  PreviousRemainingQuantity = 8,
}
