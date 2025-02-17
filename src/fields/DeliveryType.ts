/**
 * Identifies type of settlement
 * tag: 919
 * @readonly
 * @enum {number} (int)
 */
export enum DeliveryType {
  /** "Versus Payment": Deliver (if sell) or Receive (if buy) vs. (against) Payment */
  VersusPayment = 0,
  /** "Free": Deliver (if sell) or Receive (if buy) Free */
  Free = 1,
  /** Tri-Party */
  TriParty = 2,
  /** Hold In Custody */
  HoldInCustody = 3,
  DeliverByValue = 4,
}
