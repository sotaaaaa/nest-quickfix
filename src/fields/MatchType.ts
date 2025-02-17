/**
 * The point in the matching process at which this trade was matched.
 * tag: 574
 * @readonly
 * @enum {string} (String)
 */
export enum MatchType {
  /** Exact match on Trade Date, Stock Symbol, Quantity, Price, Trade Type, and Special Trade Indicator plus four badges and execution time (within two-minute window) */
  ExactMatchPlus4BadgesExecTime = 'A1',
  /** Exact match on Trade Date, Stock Symbol, Quantity, Price, Trade Type, and Special Trade Indicator, plus four badges */
  ExactMatchPlus4Badges = 'A2',
  /** ACT Accepted Trade */
  ACTAcceptedTrade = 'M3',
  /** Exact match on Trade Date, Stock Symbol, Quantity, Price, Trade Type, and Special Trade Indicator, plus two badges and execution time (within two-minute window) */
  ExactMatchPlus2BadgesExecTime = 'A3',
  /** ACT Default Trade */
  ACTDefaultTrade = 'M4',
  /** Exact match on Trade Date, Stock Symbol, Quantity, Price, Trade Type, and Special Trade Indicator, plus two badges */
  ExactMatchPlus2Badges = 'A4',
  /** ACT Default After M2 */
  ACTDefaultAfterM2 = 'M5',
  /** Exact match on Trade Date, Stock Symbol, Quantity, Price, TradeType, and Special Trade Indicator plus execution time (within two-minute window) */
  ExactMatchPlusExecTime = 'A5',
  /** ACT M6 Match */
  ACTM6Match = 'M6',
  /** Compared records resulting from stamped advisories or specialist accepts/pair-offs */
  StampedAdvisoriesOrSpecialistAccepts = 'AQ',
  /** Summarized match using A1 exact match criteria except quantity is summaried */
  A1ExactMatchSummarizedQuantity = 'S1',
  /** Summarized match using A2 exact match criteria except quantity is summarized */
  A2ExactMatchSummarizedQuantity = 'S2',
  /** Summarized match using A3 exact match criteria except quantity is summarized */
  A3ExactMatchSummarizedQuantity = 'S3',
  /** Summarized match using A4 exact match criteria except quantity is summarized */
  A4ExactMatchSummarizedQuantity = 'S4',
  /** Summarized match using A5 exact match criteria except quantity is summarized */
  A5ExactMatchSummarizedQuantity = 'S5',
  /** Exact match on Trade Date, Stock Symbol, Quantity, Price, Trade Type, and Special Trade Indicator minus badges And times: ACT M1 match */
  ExactMatchMinusBadgesTimes = 'M1',
  /** Summarized match minus badges and times: ACT M2 Match */
  SummarizedMatchMinusBadgesTimes = 'M2',
  /** OCS Locked In: Non-ACT */
  OCSLockedIn = 'MT',
  /** One-Party Trade Report (privately negotiated trade) */
  OnePartyTradeReport = '1',
  /** Two-Party Trade Report (privately negotiated trade) */
  TwoPartyTradeReport = '2',
  /** Confirmed Trade Report (reporting from recognized markets) */
  ConfirmedTradeReport = '3',
  /** Auto-match */
  AutoMatch = '4',
  /** Cross Auction */
  CrossAuction = '5',
  /** Counter-Order Selection */
  CounterOrderSelection = '6',
  /** Call Auction */
  CallAuction = '7',
  /** Issuing/Buy Back Auction */
  Issuing = '8',
  /** Systematic Internaliser (SI) */
  SystematicInternaliser = '9',
  AutoMatchLastLook = '10',
  CrossAuctionLastLook = '11',
}
