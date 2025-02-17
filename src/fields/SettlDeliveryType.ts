/**
 * Identifies type of settlement
 * tag: 172
 * @readonly
 * @enum {number} (int)
 */
export enum SettlDeliveryType {
  /** "Versus. Payment": Deliver (if Sell) or Receive (if Buy) vs. (Against) Payment */
  Versus = 0,
  /** "Free": Deliver (if Sell) or Receive (if Buy) Free */
  Free = 1,
  /** Tri-Party */
  TriParty = 2,
  /** Hold In Custody */
  HoldInCustody = 3,
}
