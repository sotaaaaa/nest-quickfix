/**
 * Code to identify reason for order rejection. Note: Values 3, 4, and 5 will be used when rejecting an order due to pre-allocation information errors.
 * tag: 103
 * @readonly
 * @enum {number} (int)
 */
export enum OrdRejReason {
  /** Broker / Exchange option */
  BrokerCredit = 0,
  UnknownSymbol = 1,
  /** Exchange closed */
  ExchangeClosed = 2,
  /** Order exceeds limit */
  OrderExceedsLimit = 3,
  /** Too late to enter */
  TooLateToEnter = 4,
  /** Unknown order */
  UnknownOrder = 5,
  /** Duplicate Order (e.g. dupe ClOrdID) */
  DuplicateOrder = 6,
  /** Duplicate of a verbally communicated order */
  DuplicateOfAVerballyCommunicatedOrder = 7,
  /** Stale order */
  StaleOrder = 8,
  /** Trade along required */
  TradeAlongRequired = 9,
  /** Invalid Investor ID */
  InvalidInvestorID = 10,
  /** Unsupported order characteristic */
  UnsupportedOrderCharacteristic = 11,
  /** Surveillance option */
  SurveillanceOption = 12,
  /** Incorrect quantity */
  IncorrectQuantity = 13,
  /** Incorrect allocated quantity */
  IncorrectAllocatedQuantity = 14,
  UnknownAccount = 15,
  /** Price exceeds current price band */
  PriceExceedsCurrentPriceBand = 16,
  /** Invalid price increment */
  InvalidPriceIncrement = 18,
  /** Reference price not available */
  ReferencePriceNotAvailable = 19,
  /** Notional value exceeds threshold */
  NotionalValueExceedsThreshold = 20,
  AlgorithmRiskThresholdBreached = 21,
  /** Short sell not permitted */
  ShortSellNotPermitted = 22,
  /** Short sell rejected due to security pre-borrow restriction */
  ShortSellSecurityPreBorrowRestriction = 23,
  /** Short sell rejected due to account pre-borrow restriction */
  ShortSellAccountPreBorrowRestriction = 24,
  InsufficientCreditLimit = 25,
  /** Exceeded clip size limit */
  ExceededClipSizeLimit = 26,
  /** Exceeded maximum notional order amount */
  ExceededMaxNotionalOrderAmt = 27,
  /** Exceeded DV01/PV01 limit */
  ExceededDV01PV01Limit = 28,
  /** Exceeded CS01 limit */
  ExceededCS01Limit = 29,
  LastLook = 30,
  LastLookLatency = 31,
  UnavailablePriceLiquidity = 32,
  InvalidMissingEntitlements = 33,
  Other = 99,
}
