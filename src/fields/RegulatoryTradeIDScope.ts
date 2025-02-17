/**
 * Specifies the scope to which the RegulatoryTradeID(1903) applies. Used when a trade must be assigned more than one identifier, e.g. one for the clearing member and another for the client on a cleared trade as with the principal model in Europe.
 * tag: 2397
 * @readonly
 * @enum {number} (int)
 */
export enum RegulatoryTradeIDScope {
  /** Clearing member */
  ClearingMember = 1,
  /** Client */
  Client = 2,
}
