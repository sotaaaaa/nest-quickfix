/**
 * Type of Discretion Offset value
 * tag: 842
 * @readonly
 * @enum {number} (int)
 */
export enum DiscretionOffsetType {
  /** Price (default) */
  Price = 0,
  /** Basis Points */
  BasisPoints = 1,
  /** Ticks */
  Ticks = 2,
  /** Price Tier / Level */
  PriceTier = 3,
}
