/**
 * Instructions for order handling on exchange trading floor. If more than one instruction is applicable to an order, this field can contain multiple instructions separated by space. *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features and Supported Approach" *** (see Volume : "Glossary" for value definitions)
 * tag: 18
 * @readonly
 * @enum {string} (MultipleCharValue)
 */
export enum ExecInst {
  /** Stay on offer side */
  StayOnOfferSide = '0',
  /** Not held */
  NotHeld = '1',
  /** Work */
  Work = '2',
  /** Go along */
  GoAlong = '3',
  /** Over the day */
  OverTheDay = '4',
  /** Held */
  Held = '5',
  /** Participate don't initiate */
  ParticipateDoNotInitiate = '6',
  /** Strict scale */
  StrictScale = '7',
  /** Try to scale */
  TryToScale = '8',
  /** Stay on bid side */
  StayOnBidSide = '9',
  NoCross = 'A',
  /** OK to cross */
  OKToCross = 'B',
  /** Call first */
  CallFirst = 'C',
  PercentOfVolume = 'D',
  /** Do not increase - DNI */
  DoNotIncrease = 'E',
  /** Do not reduce - DNR */
  DoNotReduce = 'F',
  /** All or none - AON */
  AllOrNone = 'G',
  ReinstateOnSystemFailure = 'H',
  /** Institutions only */
  InstitutionsOnly = 'I',
  ReinstateOnTradingHalt = 'J',
  CancelOnTradingHalt = 'K',
  /** Last peg (last sale) */
  LastPeg = 'L',
  /** Mid-price peg (midprice of inside quote) */
  MidPricePeg = 'M',
  /** Non-negotiable */
  NonNegotiable = 'N',
  /** Opening peg */
  OpeningPeg = 'O',
  /** Market peg */
  MarketPeg = 'P',
  CancelOnSystemFailure = 'Q',
  PrimaryPeg = 'R',
  /** Suspend */
  Suspend = 'S',
  /** Fixed peg to local best bid or offer at time of order */
  FixedPegToLocalBestBidOrOfferAtTimeOfOrder = 'T',
  CustomerDisplayInstruction = 'U',
  /** Netting (for Forex) */
  Netting = 'V',
  /** Peg to VWAP */
  PegToVWAP = 'W',
  /** Trade along */
  TradeAlong = 'X',
  /** Try to stop */
  TryToStop = 'Y',
  /** Cancel if not best */
  CancelIfNotBest = 'Z',
  /** Trailing stop peg */
  TrailingStopPeg = 'a',
  StrictLimit = 'b',
  /** Ignore price validity checks */
  IgnorePriceValidityChecks = 'c',
  /** Peg to limit price */
  PegToLimitPrice = 'd',
  /** Work to target strategy */
  WorkToTargetStrategy = 'e',
  /** Intermarket sweep */
  IntermarketSweep = 'f',
  /** External routing allowed */
  ExternalRoutingAllowed = 'g',
  /** External routing not allowed */
  ExternalRoutingNotAllowed = 'h',
  /** Imbalance only */
  ImbalanceOnly = 'i',
  /** Single execution requested for block trade */
  SingleExecutionRequestedForBlockTrade = 'j',
  /** Best execution */
  BestExecution = 'k',
  SuspendOnSystemFailure = 'l',
  SuspendOnTradingHalt = 'm',
  ReinstateOnConnectionLoss = 'n',
  CancelOnConnectionLoss = 'o',
  SuspendOnConnectionLoss = 'p',
  Release = 'q',
  /** Execute as delta neutral using volatility provided */
  ExecuteAsDeltaNeutral = 'r',
  /** Execute as duration neutral */
  ExecuteAsDurationNeutral = 's',
  /** Execute as FX neutral */
  ExecuteAsFXNeutral = 't',
  /** Minimum guaranteed fill eligible */
  MinGuaranteedFillEligible = 'u',
  /** Bypass non-displayed liquidity */
  BypassNonDisplayLiquidity = 'v',
  Lock = 'w',
  /** Ignore notional value checks */
  IgnoreNotionalValueChecks = 'x',
  TrdAtRefPx = 'y',
  AllowFacilitation = 'z',
}
