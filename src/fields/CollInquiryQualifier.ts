/**
 * Collateral inquiry qualifiers:
 * tag: 896
 * @readonly
 * @enum {number} (int)
 */
export enum CollInquiryQualifier {
  /** Trade Date */
  TradeDate = 0,
  /** GC Instrument */
  GCInstrument = 1,
  /** Collateral Instrument */
  CollateralInstrument = 2,
  /** Substitution Eligible */
  SubstitutionEligible = 3,
  /** Not Assigned */
  NotAssigned = 4,
  /** Partially Assigned */
  PartiallyAssigned = 5,
  /** Fully Assigned */
  FullyAssigned = 6,
  /** Outstanding Trades (Today < end date) */
  OutstandingTrades = 7,
}
