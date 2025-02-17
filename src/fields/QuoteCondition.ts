/**
 * Space-delimited list of conditions describing a quote.
 * tag: 276
 * @readonly
 * @enum {string} (MultipleStringValue)
 */
export enum QuoteCondition {
  /** Open/Active */
  Open = 'A',
  /** Closed/Inactive */
  Closed = 'B',
  /** Exchange Best */
  ExchangeBest = 'C',
  /** Consolidated Best */
  ConsolidatedBest = 'D',
  /** Locked */
  Locked = 'E',
  /** Crossed */
  Crossed = 'F',
  /** Depth */
  Depth = 'G',
  /** Fast Trading */
  FastTrading = 'H',
  /** Non-Firm */
  NonFirm = 'I',
  /** Manual/Slow Quote */
  Manual = 'L',
  /** Outright Price */
  OutrightPrice = 'J',
  /** Implied Price */
  ImpliedPrice = 'K',
  /** Depth on Offer */
  DepthOnOffer = 'M',
  /** Depth on Bid */
  DepthOnBid = 'N',
  /** Closing */
  Closing = 'O',
  /** News Dissemination */
  NewsDissemination = 'P',
  /** Trading Range */
  TradingRange = 'Q',
  /** Order Influx */
  OrderInflux = 'R',
  /** Due to Related */
  DueToRelated = 'S',
  /** News Pending */
  NewsPending = 'T',
  /** Additional Info */
  AdditionalInfo = 'U',
  /** Additional Info due to related */
  AdditionalInfoDueToRelated = 'V',
  /** Resume */
  Resume = 'W',
  /** View of Common */
  ViewOfCommon = 'X',
  /** Volume Alert */
  VolumeAlert = 'Y',
  /** Order Imbalance */
  OrderImbalance = 'Z',
  /** Equipment Changeover */
  EquipmentChangeover = 'a',
  /** No Open / No Resume */
  NoOpen = 'b',
  /** Regular ETH */
  RegularETH = 'c',
  /** Automatic Execution */
  AutomaticExecution = 'd',
  /** Automatic Execution ETH */
  AutomaticExecutionETH = 'e',
  /** Fast Market ETH */
  FastMarketETH = 'f',
  /** Inactive ETH */
  InactiveETH = 'g',
  /** Rotation */
  Rotation = 'h',
  /** Rotation ETH */
  RotationETH = 'i',
  /** Halt */
  Halt = 'j',
  /** Halt ETH */
  HaltETH = 'k',
  /** Due to News Dissemination */
  DueToNewsDissemination = 'l',
  /** Due to News Pending */
  DueToNewsPending = 'm',
  /** Trading Resume */
  TradingResume = 'n',
  /** Out of Sequence */
  OutOfSequence = 'o',
  /** Bid Specialist */
  BidSpecialist = 'p',
  /** Offer Specialist */
  OfferSpecialist = 'q',
  /** Bid Offer Specialist */
  BidOfferSpecialist = 'r',
  /** End of Day SAM */
  EndOfDaySAM = 's',
  /** Forbidden SAM */
  ForbiddenSAM = 't',
  /** Frozen SAM */
  FrozenSAM = 'u',
  /** PreOpening SAM */
  PreOpeningSAM = 'v',
  /** Opening SAM */
  OpeningSAM = 'w',
  /** Open SAM */
  OpenSAM = 'x',
  /** Surveillance SAM */
  SurveillanceSAM = 'y',
  /** Suspended SAM */
  SuspendedSAM = 'z',
  /** Reserved SAM */
  ReservedSAM = '0',
  /** No Active SAM */
  NoActiveSAM = '1',
  /** Restricted */
  Restricted = '2',
  /** Rest of Book VWAP */
  RestOfBookVWAP = '3',
  /** Better Prices in Conditional Orders */
  BetterPricesInConditionalOrders = '4',
  /** Median Price */
  MedianPrice = '5',
  /** Full Curve */
  FullCurve = '6',
  /** Flat Curve */
  FlatCurve = '7',
}
