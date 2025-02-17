/**
 * Identifies the type or role of the PartyID (448) specified.
 * tag: 452
 * @readonly
 * @enum {number} (int)
 */
export enum PartyRole {
  /** Executing Firm (formerly FIX 4.2 ExecBroker) */
  ExecutingFirm = 1,
  /** Broker of Credit (formerly FIX 4.2 BrokerOfCredit) */
  BrokerOfCredit = 2,
  /** Client ID (formerly FIX 4.2 ClientID) */
  ClientID = 3,
  /** Clearing Firm (formerly FIX 4.2 ClearingFirm) */
  ClearingFirm = 4,
  /** Investor ID */
  InvestorID = 5,
  /** Introducing Firm */
  IntroducingFirm = 6,
  /** Entering Firm */
  EnteringFirm = 7,
  /** Locate / Lending Firm (for short-sales) */
  Locate = 8,
  /** Fund Manager Client ID (for CIV) */
  FundManagerClientID = 9,
  /** Settlement Location (formerly FIX 4.2 SettlLocation) */
  SettlementLocation = 10,
  /** Order Origination Trader (associated with Order Origination Firm - i.e. trader who initiates/submits the order) */
  OrderOriginationTrader = 11,
  /** Executing Trader (associated with Executing Firm - actually executes) */
  ExecutingTrader = 12,
  /** Order Origination Firm (e.g. buy-side firm) */
  OrderOriginationFirm = 13,
  /** Giveup Clearing Firm (firm to which trade is given up) */
  GiveupClearingFirmDepr = 14,
  /** Correspondant Clearing Firm */
  CorrespondantClearingFirm = 15,
  /** Executing System */
  ExecutingSystem = 16,
  /** Contra Firm */
  ContraFirm = 17,
  /** Contra Clearing Firm */
  ContraClearingFirm = 18,
  /** Sponsoring Firm */
  SponsoringFirm = 19,
  /** Underlying Contra Firm */
  UnderlyingContraFirm = 20,
  /** Clearing Organization */
  ClearingOrganization = 21,
  Exchange = 22,
  /** Customer Account */
  CustomerAccount = 24,
  /** Correspondent Clearing Organization */
  CorrespondentClearingOrganization = 25,
  /** Correspondent Broker */
  CorrespondentBroker = 26,
  /** Buyer/Seller (Receiver/Deliverer) */
  Buyer = 27,
  /** Custodian */
  Custodian = 28,
  /** Intermediary */
  Intermediary = 29,
  /** Agent */
  Agent = 30,
  /** Sub-custodian */
  SubCustodian = 31,
  /** Beneficiary */
  Beneficiary = 32,
  /** Interested party */
  InterestedParty = 33,
  RegulatoryBody = 34,
  /** Liquidity provider */
  LiquidityProvider = 35,
  /** Entering trader */
  EnteringTrader = 36,
  /** Contra trader */
  ContraTrader = 37,
  PositionAccount = 38,
  /** Contra Investor ID */
  ContraInvestorID = 39,
  /** Transfer to Firm */
  TransferToFirm = 40,
  /** Contra Position Account */
  ContraPositionAccount = 41,
  /** Contra Exchange */
  ContraExchange = 42,
  /** Internal Carry Account */
  InternalCarryAccount = 43,
  /** Order Entry Operator ID */
  OrderEntryOperatorID = 44,
  /** Secondary Account Number */
  SecondaryAccountNumber = 45,
  /** Foreign Firm */
  ForeignFirm = 46,
  /** Third Party Allocation Firm */
  ThirdPartyAllocationFirm = 47,
  /** Claiming Account */
  ClaimingAccount = 48,
  /** Asset Manager */
  AssetManager = 49,
  /** Pledgor Account */
  PledgorAccount = 50,
  /** Pledgee Account */
  PledgeeAccount = 51,
  /** Large Trader Reportable Account */
  LargeTraderReportableAccount = 52,
  /** Trader mnemonic */
  TraderMnemonic = 53,
  /** Sender Location */
  SenderLocation = 54,
  /** Session ID */
  SessionID = 55,
  /** Acceptable Counterparty */
  AcceptableCounterparty = 56,
  /** Unacceptable Counterparty */
  UnacceptableCounterparty = 57,
  /** Entering Unit */
  EnteringUnit = 58,
  /** Executing Unit */
  ExecutingUnit = 59,
  /** Introducing Broker */
  IntroducingBroker = 60,
  /** Quote originator */
  QuoteOriginator = 61,
  /** Report originator */
  ReportOriginator = 62,
  /** Systematic internaliser (SI) */
  SystematicInternaliser = 63,
  MultilateralTradingFacility = 64,
  RegulatedMarket = 65,
  /** Market Maker */
  MarketMaker = 66,
  /** Investment Firm */
  InvestmentFirm = 67,
  /** Host Competent Authority (Host CA) */
  HostCompetentAuthority = 68,
  /** Home Competent Authority (Home CA) */
  HomeCompetentAuthority = 69,
  /** Competent Authority of the most relevant market in terms of liquidity (CAL) */
  CompetentAuthorityLiquidity = 70,
  /** Competent Authority of the Transaction (Execution) Venue (CATV) */
  CompetentAuthorityTransactionVenue = 71,
  ReportingIntermediary = 72,
  ExecutionVenue = 73,
  /** Market data entry originator */
  MarketDataEntryOriginator = 74,
  /** Location ID */
  LocationID = 75,
  /** Desk ID */
  DeskID = 76,
  /** Market data market */
  MarketDataMarket = 77,
  /** Allocation Entity */
  AllocationEntity = 78,
  /** Prime Broker providing General Trade Services */
  PrimeBroker = 79,
  /** Step-Out Firm (Prime Broker) */
  StepOutFirm = 80,
  /** Broker clearing identifier */
  BrokerClearingID = 81,
  /** Central Registration Depository (CRD) */
  CentralRegistrationDepository = 82,
  /** Clearing Account */
  ClearingAccount = 83,
  /** Acceptable Settling Counterparty */
  AcceptableSettlingCounterparty = 84,
  /** Unacceptable Settling Counterparty */
  UnacceptableSettlingCounterparty = 85,
  /** CLS Member Bank */
  CLSMemberBank = 86,
  /** In Concert Group */
  InConcertGroup = 87,
  /** In Concert Controlling Entity */
  InConcertControllingEntity = 88,
  /** Large Positions Reporting Account */
  LargePositionsReportingAccount = 89,
  /** Settlement Firm */
  SettlementFirm = 90,
  SettlementAccount = 91,
  /** Reporting Market Center */
  ReportingMarketCenter = 92,
  /** Related Reporting Market Center */
  RelatedReportingMarketCenter = 93,
  AwayMarket = 94,
  /** Give-up (trading) firm */
  GiveupTradingFirm = 95,
  /** Take-up (trading) firm */
  TakeupTradingFirm = 96,
  /** Give-up clearing firm */
  GiveupClearingFirm = 97,
  /** Take-up clearing firm */
  TakeupClearingFirm = 98,
  OriginatingMarket = 99,
  MarginAccount = 100,
  CollateralAssetAccount = 101,
  DataRepository = 102,
  /** Calculation agent */
  CalculationAgent = 103,
  /** Sender of exercise notice */
  ExerciseNoticeSender = 104,
  /** Receiver of exercise notice */
  ExerciseNoticeReceiver = 105,
  RateReferenceBank = 106,
  /** Correspondent */
  Correspondent = 107,
  BeneficiaryBank = 109,
  /** Borrower */
  Borrower = 110,
  /** Primary obligator */
  PrimaryObligator = 111,
  /** Guarantor */
  Guarantor = 112,
  /** Excluded reference entity */
  ExcludedReferenceEntity = 113,
  /** Determining party */
  DeterminingParty = 114,
  /** Hedging party */
  HedgingParty = 115,
  ReportingEntity = 116,
  SalesPerson = 117,
  Operator = 118,
  /** Central Securities Depository (CSD) */
  CSD = 119,
  /** International Central Securities Depository (ICSD) */
  ICSD = 120,
  TradingSubAccount = 121,
  InvestmentDecisionMaker = 122,
  PublishingIntermediary = 123,
  CSDParticipant = 124,
  Issuer = 125,
  ContraCustomerAccount = 126,
  ContraInvestmentDecisionMaker = 127,
  AuthorizingPerson = 128,
}
