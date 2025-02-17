export enum StipulationType {
  /** Alternative Minimum Tax (Y/N) */
  AlternativeMinimumTax = 'AMT',
  IncurredRecovery = 'INCURRCVY',
  /** Absolute Prepayment Speed */
  AbsolutePrepaymentSpeed = 'ABS',
  /** Auto Reinvestment at <rate> or better */
  AutoReinvestment = 'AUTOREINV',
  AdditionalTerm = 'ADDTRM',
  /** Constant Prepayment Penalty */
  ConstantPrepaymentPenalty = 'CPP',
  /** Bank qualified (Y/N) */
  BankQualified = 'BANKQUAL',
  ModifiedEquityDelivery = 'MODEQTYDLVY',
  /** Constant Prepayment Rate */
  ConstantPrepaymentRate = 'CPR',
  /** Bargain conditions (see StipulationValue (234) for values) */
  BargainConditions = 'BGNCON',
  NoReferenceOblication = 'NOREFOBLIG',
  /** Constant Prepayment Yield */
  ConstantPrepaymentYield = 'CPY',
  /** Coupon range */
  CouponRange = 'COUPON',
  UnknownReferenceObligation = 'UNKREFOBLIG',
  /** final CPR of Home Equity Prepayment Curve */
  FinalCPROfHomeEquityPrepaymentCurve = 'HEP',
  /** ISO Currency Code */
  ISOCurrencyCode = 'CURRENCY',
  AllGuarantees = 'ALLGUARANTEES',
  /** Percent of Manufactured Housing Prepayment Curve */
  PercentOfManufacturedHousingPrepaymentCurve = 'MHP',
  /** Custom start/end date */
  CustomStart = 'CUSTOMDATE',
  ReferencePrice = 'REFPX',
  /** Monthly Prepayment Rate */
  MonthlyPrepaymentRate = 'MPR',
  /** Geographics and % range (ex. 234=CA 0-80 [minimum of 80% California assets]) */
  Geographics = 'GEOG',
  ReferencePolicy = 'REFPOLICY',
  /** Percent of Prospectus Prepayment Curve */
  PercentOfProspectusPrepaymentCurve = 'PPC',
  /** Valuation Discount */
  ValuationDiscount = 'HAIRCUT',
  SecuredList = 'SECRDLIST',
  /** Percent of BMA Prepayment Curve */
  PercentOfBMAPrepaymentCurve = 'PSA',
  /** Insured (Y/N) */
  Insured = 'INSURED',
  /** Single Monthly Mortality */
  SingleMonthlyMortality = 'SMM',
  /** Year Or Year/Month of Issue (ex. 234=2002/09) */
  IssueDate = 'ISSUE',
  /** Issuer's ticker */
  Issuer = 'ISSUER',
  /** issue size range */
  IssueSizeRange = 'ISSUESIZE',
  /** Lookback Days */
  LookbackDays = 'LOOKBACK',
  /** Explicit lot identifier */
  ExplicitLotIdentifier = 'LOT',
  /** Lot Variance (value in percent maximum over- or under-allocation allowed) */
  LotVariance = 'LOTVAR',
  /** Maturity Year And Month */
  MaturityYearAndMonth = 'MAT',
  /** Maturity range */
  MaturityRange = 'MATURITY',
  /** Maximum substitutions (Repo) */
  MaximumSubstitutions = 'MAXSUBS',
  /** Minimum denomination */
  MinimumDenomination = 'MINDNOM',
  /** Minimum increment */
  MinimumIncrement = 'MININCR',
  /** Minimum quantity */
  MinimumQuantity = 'MINQTY',
  /** Payment frequency, calendar */
  PaymentFrequency = 'PAYFREQ',
  /** Number Of Pieces */
  NumberOfPieces = 'PIECES',
  /** Pools Maximum */
  PoolsMaximum = 'PMAX',
  /** Pools per Lot */
  PoolsPerLot = 'PPL',
  /** Pools per Million */
  PoolsPerMillion = 'PPM',
  /** Pools per Trade */
  PoolsPerTrade = 'PPT',
  /** Price Range */
  PriceRange = 'PRICE',
  /** Pricing frequency */
  PricingFrequency = 'PRICEFREQ',
  /** Production Year */
  ProductionYear = 'PROD',
  /** Call protection */
  CallProtection = 'PROTECT',
  /** Purpose */
  Purpose = 'PURPOSE',
  /** Benchmark price source */
  BenchmarkPriceSource = 'PXSOURCE',
  /** Rating source and range */
  RatingSourceAndRange = 'RATING',
  /** Type Of Redemption - values are: NonCallable, Prefunded, EscrowedToMaturity, Putable, Convertible */
  TypeOfRedemption = 'REDEMPTION',
  /** Restricted (Y/N) */
  Restricted = 'RESTRICTED',
  /** Market Sector */
  MarketSector = 'SECTOR',
  /** Security Type included or excluded */
  SecurityTypeIncludedOrExcluded = 'SECTYPE',
  /** Structure */
  Structure = 'STRUCT',
  /** Substitutions frequency (Repo) */
  SubstitutionsFrequency = 'SUBSFREQ',
  /** Substitutions left (Repo) */
  SubstitutionsLeft = 'SUBSLEFT',
  /** Freeform Text */
  FreeformText = 'TEXT',
  /** Trade Variance (value in percent maximum over- or under-allocation allowed) */
  TradeVariance = 'TRDVAR',
  /** Weighted Average Coupon - value in percent (exact or range) plus "Gross" or "Net" of servicing spread (the default) (ex. 234=6.5-Net [minimum of 6.5% net of servicing fee]) */
  WeightedAverageCoupon = 'WAC',
  /** Weighted Average Life Coupon - value in percent (exact or range) */
  WeightedAverageLifeCoupon = 'WAL',
  /** Weighted Average Loan Age - value in months (exact or range) */
  WeightedAverageLoanAge = 'WALA',
  /** Weighted Average Maturity - value in months (exact or range) */
  WeightedAverageMaturity = 'WAM',
  /** Whole Pool (Y/N) */
  WholePool = 'WHOLE',
  /** Yield Range */
  YieldRange = 'YIELD',
  OriginalAmount = 'ORIGAMT',
  /** Average FICO Score */
  AverageFICOScore = 'AVFICO',
  /** Pool effective date */
  PoolEffectiveDate = 'POOLEFFDT',
  /** Average Loan Size */
  AverageLoanSize = 'AVSIZE',
  PoolInitialFactor = 'POOLINITFCTR',
  /** Maximum Loan Balance */
  MaximumLoanBalance = 'MAXBAL',
  Tranche = 'TRANCHE',
  /** Pool Identifier */
  PoolIdentifier = 'POOL',
  Substitution = 'SUBSTITUTION',
  /** Type of Roll trade */
  TypeOfRollTrade = 'ROLLTYPE',
  MULTEXCHFLLBCK = 'MULTEXCHFLLBCK',
  /** Reference to rolling or closing trade */
  ReferenceToRollingOrClosingTrade = 'REFTRADE',
  COMPSECFLLBCK = 'COMPSECFLLBCK',
  /** Principal to rolling or closing trade */
  PrincipalOfRollingOrClosingTrade = 'REFPRIN',
  LOCLJRSDCTN = 'LOCLJRSDCTN',
  /** Interest of rolling or closing trade */
  InterestOfRollingOrClosingTrade = 'REFINT',
  RELVJRSDCTN = 'RELVJRSDCTN',
  /** Available offer quantity to be shown to the street */
  AvailableOfferQuantityToBeShownToTheStreet = 'AVAILQTY',
  /** Broker's sales credit */
  BrokerCredit = 'BROKERCREDIT',
  /** Offer price to be shown to internal brokers */
  OfferPriceToBeShownToInternalBrokers = 'INTERNALPX',
  /** Offer quantity to be shown to internal brokers */
  OfferQuantityToBeShownToInternalBrokers = 'INTERNALQTY',
  /** The minimum residual offer quantity */
  TheMinimumResidualOfferQuantity = 'LEAVEQTY',
  /** Maximum order size */
  MaximumOrderSize = 'MAXORDQTY',
  /** Order quantity increment */
  OrderQuantityIncrement = 'ORDRINCR',
  /** Primary or Secondary market indicator */
  PrimaryOrSecondaryMarketIndicator = 'PRIMARY',
  /** Broker sales credit override */
  BrokerSalesCreditOverride = 'SALESCREDITOVR',
  /** Trader's credit */
  TraderCredit = 'TRADERCREDIT',
  /** Discount Rate (when price is denominated in percent of par) */
  DiscountRate = 'DISCOUNT',
  /** Yield to Maturity (when YieldType(235) and Yield(236) show a different yield) */
  YieldToMaturity = 'YTM',
  /** Interest payoff of rolling or amending trade */
  InterestPayoffOfRollingOrAmendingTrade = 'PAYOFF',
}
