/**
 * Identifies the type of Corporate Action.
 * tag: 292
 * @readonly
 * @enum {string} (MultipleCharValue)
 */
export enum CorporateAction {
  /** Ex-Dividend */
  ExDividend = 'A',
  /** Ex-Distribution */
  ExDistribution = 'B',
  /** Ex-Rights */
  ExRights = 'C',
  /** New */
  New = 'D',
  /** Ex-Interest */
  ExInterest = 'E',
  /** Cash Dividend */
  CashDividend = 'F',
  /** Stock Dividend */
  StockDividend = 'G',
  /** Non-Integer Stock Split */
  NonIntegerStockSplit = 'H',
  /** Reverse Stock Split */
  ReverseStockSplit = 'I',
  /** Standard-Integer Stock Split */
  StandardIntegerStockSplit = 'J',
  /** Position Consolidation */
  PositionConsolidation = 'K',
  /** Liquidation Reorganization */
  LiquidationReorganization = 'L',
  /** Merger Reorganization */
  MergerReorganization = 'M',
  /** Rights Offering */
  RightsOffering = 'N',
  /** Shareholder Meeting */
  ShareholderMeeting = 'O',
  /** Spinoff */
  Spinoff = 'P',
  /** Tender Offer */
  TenderOffer = 'Q',
  /** Warrant */
  Warrant = 'R',
  /** Special Action */
  SpecialAction = 'S',
  /** Symbol Conversion */
  SymbolConversion = 'T',
  /** CUSIP / Name Change */
  CUSIP = 'U',
  /** Leap Rollover */
  LeapRollover = 'V',
  /** Succession Event */
  SuccessionEvent = 'W',
}
