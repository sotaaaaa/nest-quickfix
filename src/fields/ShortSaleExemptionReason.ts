/**
 * Indicates the reason a short sale order is exempted from applicable regulation (e.g. Reg SHO addendum (b)(1) in the U.S.).
 * tag: 1688
 * @readonly
 * @enum {number} (int)
 */
export enum ShortSaleExemptionReason {
  ExemptionReasonUnknown = 0,
  IncomingSSE = 1,
  AboveNationalBestBid = 2,
  DelayedDelivery = 3,
  OddLot = 4,
  DomesticArbitrage = 5,
  InternationalArbitrage = 6,
  UnderwriterOrSyndicateDistribution = 7,
  RisklessPrincipal = 8,
  VWAP = 9,
}
