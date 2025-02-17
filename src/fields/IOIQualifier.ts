/**
 * Code to qualify IOI use. (see Volume : "Glossary" for value definitions)
 * tag: 104
 * @readonly
 * @enum {string} (char)
 */
export enum IOIQualifier {
  /** All or None (AON) */
  AllOrNone = 'A',
  /** Market On Close (MOC) (held to close) */
  MarketOnClose = 'B',
  /** At the close (around/not held to close) */
  AtTheClose = 'C',
  /** VWAP (Volume Weighted Average Price) */
  VWAP = 'D',
  Axe = 'E',
  AxeOnBid = 'F',
  AxeOnOffer = 'G',
  ClientNaturalWorking = 'H',
  InTouchWith = 'I',
  PositionWanted = 'J',
  MarketMaking = 'K',
  /** Limit */
  Limit = 'L',
  /** More Behind */
  MoreBehind = 'M',
  ClientNaturalBlock = 'N',
  /** At the Open */
  AtTheOpen = 'O',
  /** Taking a Position */
  TakingAPosition = 'P',
  /** At the Market (previously called Current Quote) */
  AtTheMarket = 'Q',
  /** Ready to Trade */
  ReadyToTrade = 'R',
  /** Inventory or Portfolio Shown */
  PortfolioShown = 'S',
  /** Through the Day */
  ThroughTheDay = 'T',
  Unwind = 'U',
  /** Versus */
  Versus = 'V',
  /** Indication - Working Away */
  Indication = 'W',
  /** Crossing Opportunity */
  CrossingOpportunity = 'X',
  /** At the Midpoint */
  AtTheMidpoint = 'Y',
  /** Pre-open */
  PreOpen = 'Z',
  QuantityNegotiable = '1',
  AllowLateBids = '2',
  ImmediateOrCounter = '3',
  AutoTrade = '4',
  AutomaticSpot = 'a',
  PlatformCalculatedSpot = 'b',
  OutsideSpread = 'c',
  DeferredSpot = 'd',
  NegotiatedSpot = 'n',
}
