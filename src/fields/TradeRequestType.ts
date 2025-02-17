/**
 * Type of Trade Capture Report.
 * tag: 569
 * @readonly
 * @enum {number} (int)
 */
export enum TradeRequestType {
  /** All Trades */
  AllTrades = 0,
  /** Matched trades matching criteria provided on request (Parties, ExecID, TradeID, OrderID, Instrument, InputSource, etc.) */
  MatchedTradesMatchingCriteria = 1,
  /** Unmatched trades that match criteria */
  UnmatchedTradesThatMatchCriteria = 2,
  /** Unreported trades that match criteria */
  UnreportedTradesThatMatchCriteria = 3,
  /** Advisories that match criteria */
  AdvisoriesThatMatchCriteria = 4,
}
