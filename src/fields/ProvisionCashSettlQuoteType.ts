/**
 * Identifies the type of quote to be used.
 * tag: 40111
 * @readonly
 * @enum {number} (int)
 */
export enum ProvisionCashSettlQuoteType {
  /** Bid */
  Bid = 0,
  /** Mid */
  Mid = 1,
  /** Offer */
  Offer = 2,
  ExercisingPartyPays = 3,
}
