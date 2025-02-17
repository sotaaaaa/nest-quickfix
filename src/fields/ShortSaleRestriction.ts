/**
 * Indicates whether a restriction applies to short selling a security.
 * tag: 1687
 * @readonly
 * @enum {number} (int)
 */
export enum ShortSaleRestriction {
  /** No restrictions */
  NoRestrictions = 0,
  /** Security is not shortable */
  SecurityNotShortable = 1,
  /** Security not shortable at or below the best bid */
  SecurityNotShortableAtOrBelowBestBid = 2,
  /** Security is not shortable without pre-borrow */
  SecurityNotShortableWithoutPreBorrow = 3,
}
