/**
 * Type of Peg Offset value
 * tag: 836
 * @readonly
 * @enum {number} (int)
 */
export enum PegOffsetType {
  /** Price (default) */
  Price = 0,
  /** Basis Points */
  BasisPoints = 1,
  /** Ticks */
  Ticks = 2,
  /** Price Tier / Level */
  PriceTier = 3,
  /** Percentage */
  Percentage = 4,
}
