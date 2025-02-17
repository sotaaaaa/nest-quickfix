/**
 * Used to describe the ownership of the position.
 * tag: 1834
 * @readonly
 * @enum {number} (int)
 */
export enum PositionCapacity {
  /** Principal */
  Principal = 0,
  /** Agent */
  Agent = 1,
  /** Customer */
  Customer = 2,
  /** Counterparty */
  Counterparty = 3,
}
