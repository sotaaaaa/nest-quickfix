/**
 * The type of instrument relationship
 * tag: 1648
 * @readonly
 * @enum {number} (int)
 */
export enum RelatedInstrumentType {
  /** "hedges for" instrument */
  HedgesForInstrument = 1,
  /** Underlier */
  Underlier = 2,
  /** Equity equivalent */
  EquityEquivalent = 3,
  /** Nearest exchange traded contract */
  NearestExchangeTradedContract = 4,
  RetailEquivalent = 5,
  Leg = 6,
}
