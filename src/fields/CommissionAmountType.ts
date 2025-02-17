/**
 * Indicates what type of commission is being expressed in CommissionAmount(2640).
 * tag: 2641
 * @readonly
 * @enum {number} (int)
 */
export enum CommissionAmountType {
  /** Unspecified */
  Unspecified = 0,
  Acceptance = 1,
  Broker = 2,
  ClearingBroker = 3,
  Retail = 4,
  SalesCommission = 5,
  LocalCommission = 6,
  /** Research payment */
  ResearchPayment = 7,
}
