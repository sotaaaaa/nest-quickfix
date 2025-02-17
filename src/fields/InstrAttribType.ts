/**
 * Code to represent the type of instrument attribute
 * tag: 871
 * @readonly
 * @enum {number} (int)
 */
export enum InstrAttribType {
  /** Flat (securities pay interest on a current basis but are traded without interest) */
  Flat = 1,
  /** Zero coupon */
  ZeroCoupon = 2,
  /** Interest bearing (for Euro commercial paper when not issued at discount) */
  InterestBearing = 3,
  /** No periodic payments */
  NoPeriodicPayments = 4,
  /** Variable rate */
  VariableRate = 5,
  /** Less fee for put */
  LessFeeForPut = 6,
  /** Stepped coupon */
  SteppedCoupon = 7,
  CouponPeriod = 8,
  /** When [and if] issued */
  When = 9,
  /** Original issue discount */
  OriginalIssueDiscount = 10,
  /** Callable, puttable */
  Callable = 11,
  /** Escrowed to Maturity */
  EscrowedToMaturity = 12,
  EscrowedToRedemptionDate = 13,
  /** Pre-refunded */
  PreRefunded = 14,
  /** In default */
  InDefault = 15,
  /** Unrated */
  Unrated = 16,
  /** Taxable */
  Taxable = 17,
  /** Indexed */
  Indexed = 18,
  /** Subject To Alternative Minimum Tax */
  SubjectToAlternativeMinimumTax = 19,
  OriginalIssueDiscountPrice = 20,
  /** Callable below maturity value */
  CallableBelowMaturityValue = 21,
  /** Callable without notice by mail to holder unless registered */
  CallableWithoutNotice = 22,
  /** Price tick rules for security */
  PriceTickRulesForSecurity = 23,
  /** Trade type eligibility details for security */
  TradeTypeEligibilityDetailsForSecurity = 24,
  /** Instrument denominator */
  InstrumentDenominator = 25,
  /** Instrument numerator */
  InstrumentNumerator = 26,
  /** Instrument price precision */
  InstrumentPricePrecision = 27,
  /** Instrument strike price */
  InstrumentStrikePrice = 28,
  /** Tradeable indicator */
  TradeableIndicator = 29,
  /** Instrument is eligible to accept anonymous orders */
  InstrumentEligibleAnonOrders = 30,
  /** Minimum guaranteed fill volume */
  MinGuaranteedFillVolume = 31,
  /** Minimum guaranteed fill status */
  MinGuaranteedFillStatus = 32,
  /** Trade at settlement (TAS) eligibility */
  TradeAtSettlementEligibility = 33,
  TestInstrument = 34,
  DummyInstrument = 35,
  /** Negative settlement price eligibility */
  NegativeSettlementPriceEligibility = 36,
  /** Negative strike price eligibility */
  NegativeStrikePriceEligibility = 37,
  USStdContractInd = 38,
  /** Admitted to trading on a trading venue */
  AdmittedToTradingOnTradingVenue = 39,
  /** Average daily notional amount */
  AverageDailyNotionalAmount = 40,
  /** Average daily number of trades */
  AverageDailyNumberTrades = 41,
  Text = 99,
}
