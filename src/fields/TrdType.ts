export enum TrdType {
  /** Regular trade */
  RegularTrade = 0,
  /** Block trade */
  BlockTrade = 1,
  /** Exchange for physical (EFP) */
  EFP = 2,
  /** Transfer */
  Transfer = 3,
  /** Late trade */
  LateTrade = 4,
  /** T trade */
  TTrade = 5,
  /** Weighted average price trade */
  WeightedAveragePriceTrade = 6,
  /** Bunched trade */
  BunchedTrade = 7,
  /** Late bunched trade */
  LateBunchedTrade = 8,
  /** Prior reference price trade */
  PriorReferencePriceTrade = 9,
  /** After hours trade */
  AfterHoursTrade = 10,
  /** Exchange for risk (EFR) */
  ExchangeForRisk = 11,
  /** Exchange for swap (EFS) */
  ExchangeForSwap = 12,
  ExchangeOfFuturesFor = 13,
  /** Exchange of options for options (EOO) */
  ExchangeOfOptionsForOptions = 14,
  /** Trading at settlement */
  TradingAtSettlement = 15,
  /** All or none */
  AllOrNone = 16,
  /** Futures large order execution */
  FuturesLargeOrderExecution = 17,
  /** Exchange of futures for external market futures (EFF) */
  ExchangeOfFuturesForFutures = 18,
  /** Option interim trade */
  OptionInterimTrade = 19,
  /** Option cabinet trade */
  OptionCabinetTrade = 20,
  /** Privately negotiated trade */
  PrivatelyNegotiatedTrades = 22,
  /** Substitution of futures for forwards */
  SubstitutionOfFuturesForForwards = 23,
  /** Error trade */
  ErrorTrade = 24,
  /** Special cum dividend (CD) */
  SpecialCumDividend = 25,
  /** Special ex dividend (XD) */
  SpecialExDividend = 26,
  /** Special cum coupon (CC) */
  SpecialCumCoupon = 27,
  /** Special ex coupon (XC) */
  SpecialExCoupon = 28,
  /** Cash settlement (CS) */
  CashSettlement = 29,
  SpecialPrice = 30,
  /** Guaranteed delivery (GD) */
  GuaranteedDelivery = 31,
  /** Special cum rights (CR) */
  SpecialCumRights = 32,
  /** Special ex rights (XR) */
  SpecialExRights = 33,
  /** Special cum capital repayments (CP) */
  SpecialCumCapitalRepayments = 34,
  /** Special ex capital repayments (XP) */
  SpecialExCapitalRepayments = 35,
  /** Special cum bonus (CB) */
  SpecialCumBonus = 36,
  /** Special ex bonus (XB) */
  SpecialExBonus = 37,
  LargeTrade = 38,
  /** Worked principal trade */
  WorkedPrincipalTrade = 39,
  /** Block trades */
  BlockTrades = 40,
  /** Name change */
  NameChange = 41,
  /** Portfolio transfer */
  PortfolioTransfer = 42,
  ProrogationBuy = 43,
  ProrogationSell = 44,
  /** Option exercise */
  OptionExercise = 45,
  /** Delta neutral transaction */
  DeltaNeutralTransaction = 46,
  /** Financing transaction */
  FinancingTransaction = 47,
  /** Non-standard settlement */
  NonStandardSettlement = 48,
  /** Derivative related transaction */
  DerivativeRelatedTransaction = 49,
  PortfolioTrade = 50,
  /** Volume weighted average trade */
  VolumeWeightedAverageTrade = 51,
  /** Exchange granted trade */
  ExchangeGrantedTrade = 52,
  /** Repurchase agreement */
  RepurchaseAgreement = 53,
  OTC = 54,
  /** Exchange basis facility (EBF) */
  ExchangeBasisFacility = 55,
  OpeningTrade = 56,
  /** Netted trade */
  NettedTrade = 57,
  BlockSwapTrade = 58,
  /** Credit event trade */
  CreditEventTrade = 59,
  /** Succession event trade */
  SuccessionEventTrade = 60,
  /** Give-up Give-in trade */
  GiveUpGiveInTrade = 61,
  DarkTrade = 62,
  /** Technical trade */
  TechnicalTrade = 63,
  Benchmark = 64,
  PackageTrade = 65,
  RollTrade = 66,
  ClosingPriceTrade = 67,
  InterFundTransferTrade = 68,
  NetAssetValueCalculatedTrade = 69,
}
