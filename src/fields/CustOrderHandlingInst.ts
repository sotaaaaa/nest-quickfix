export enum CustOrderHandlingInst {
  /** Phone simple */
  PhoneSimple = 'A',
  /** G Order(FINRA OATS), FCM API or FIX(FIA Execution Source) */
  GOrderAndFCMAPIorFIX = 'G',
  /** Phone complex */
  PhoneComplex = 'B',
  /** Add-on order */
  AddOnOrder = 'ADD',
  /** FCM provided screen */
  FCMProvidedScreen = 'C',
  /** All or none */
  AllOrNone = 'AON',
  /** Other provided screen */
  OtherProvidedScreen = 'D',
  /** Conditional order */
  ConditionalOrder = 'CND',
  /** Client provided platform controlled by FCM */
  ClientProvidedPlatformControlledByFCM = 'E',
  /** Cash not held */
  CashNotHeld = 'CNH',
  /** Client provided platform direct to exchange */
  ClientProvidedPlatformDirectToExchange = 'F',
  /** Delivery instructions - cash */
  DeliveryInstructionsCash = 'CSH',
  /** Directed order */
  DirectedOrder = 'DIR',
  /** Algo engine */
  AlgoEngine = 'H',
  /** Discretionary limit order */
  DiscretionaryLimitOrder = 'DLO',
  /** Price at execution (price added at initial order entry, trading, middle office or time of give-up) */
  PriceAtExecution = 'J',
  /** Exchange for physical transaction */
  ExchangeForPhysicalTransaction = 'E.W',
  /** Desk - electronic */
  DeskElectronic = 'W',
  /** Fill or kill */
  FillOrKill = 'FOK',
  /** Desk - pit */
  DeskPit = 'X',
  /** Client - electronic */
  ClientElectronic = 'Y',
  /** Intraday cross */
  IntraDayCross = 'IDX',
  /** Client - pit */
  ClientPit = 'Z',
  /** Imbalance only */
  ImbalanceOnly = 'IO',
  /** Immediate or cancel */
  ImmediateOrCancel = 'IOC',
  /** Intermarket sweep order */
  IntermarketSweepOrder = 'ISO',
  /** Limit on open */
  LimitOnOpen = 'LOO',
  /** Limit on Close */
  LimitOnClose = 'LOC',
  /** Market at Open */
  MarketAtOpen = 'MAO',
  /** Market at close */
  MarketAtClose = 'MAC',
  /** Market on open */
  MarketOnOpen = 'MOO',
  /** Market on close */
  MarketOnClose = 'MOC',
  /** Merger related transfer position */
  MergerRelatedTransferPosition = 'MPT',
  /** Minimum quantity */
  MinimumQuantity = 'MQT',
  /** Market to limit */
  MarketToLimit = 'MTL',
  /** Delivery instructions - next day */
  DeliveryInstructionsNextDay = 'ND',
  /** Not held */
  NotHeld = 'NH',
  /** Options related transaction */
  OptionsRelatedTransaction = 'OPT',
  /** Over the day */
  OverTheDay = 'OVD',
  /** Pegged */
  Pegged = 'PEG',
  /** Reserve size order */
  ReserveSizeOrder = 'RSV',
  /** Stop stock transaction */
  StopStockTransaction = 'S.W',
  /** Scale */
  Scale = 'SCL',
  /** Delivery instructions - sellers option */
  DeliveryInstructionsSellersOption = 'SLR',
  /** Time order */
  TimeOrder = 'TMO',
  /** Trailing stop */
  TrailingStop = 'TS',
  /** Work */
  Work = 'WRK',
  /** Stay on offerside */
  StayOnOfferside = 'F0',
  /** Go along */
  GoAlong = 'F3',
  /** Participate do not initiate */
  ParticipateDoNotInitiate = 'F6',
  /** Strict scale */
  StrictScale = 'F7',
  /** Try to scale */
  TryToScale = 'F8',
  /** Stay on bidside */
  StayOnBidside = 'F9',
  /** No cross */
  NoCross = 'FA',
  /** OK to cross */
  OKToCross = 'FB',
  /** Call first */
  CallFirst = 'FC',
  /** Percent of volume */
  PercentOfVolume = 'FD',
  /** Reinstate on system failure */
  ReinstateOnSystemFailure = 'FH',
  /** Institution only */
  InstitutionOnly = 'FI',
  /** Reinstate on trading halt */
  ReinstateOnTradingHalt = 'FJ',
  /** Cancel on trading half */
  CancelOnTradingHalf = 'FK',
  /** Last peg */
  LastPeg = 'FL',
  /** Mid-price peg */
  MidPricePeg = 'FM',
  /** Non-negotiable */
  NonNegotiable = 'FN',
  /** Opening peg */
  OpeningPeg = 'FO',
  /** Market peg */
  MarketPeg = 'FP',
  /** Cancel on system failure */
  CancelOnSystemFailure = 'FQ',
  /** Primary peg */
  PrimaryPeg = 'FR',
  /** Suspend */
  Suspend = 'FS',
  /** Fixed peg to local best bid or offer at time of order */
  FixedPegToLocalBBO = 'FT',
  /** Peg to VWAP */
  PegToVWAP = 'FW',
  /** Trade along */
  TradeAlong = 'FX',
  /** Try to stop */
  TryToStop = 'FY',
  /** Cancel if not best */
  CancelIfNotBest = 'FZ',
  /** Strict limit */
  StrictLimit = 'Fb',
  /** Ignore price validity checks */
  IgnorePriceValidityChecks = 'Fc',
  /** Peg to Limit Price */
  PegToLimitPrice = 'Fd',
  /** Work to target strategy */
  WorkToTargetStrategy = 'Fe',
}
