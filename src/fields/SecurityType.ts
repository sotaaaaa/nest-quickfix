/**
 * Indicates type of security. Security type enumerations are grouped by Product(460) field value. NOTE: Additional values may be used by mutual agreement of the counterparties.
 * tag: 167
 * @readonly
 * @enum {string} (String)
 */
export enum SecurityType {
  EuroSupranationalCoupons = 'EUSUPRA',
  /** Corporate Bond */
  CorporateBond = 'CORP',
  /** Foreign Exchange Contract */
  ForeignExchangeContract = 'FOR',
  /** Common Stock */
  CommonStock = 'CS',
  /** Repurchase */
  Repurchase = 'REPO',
  /** Brady Bond */
  BradyBond = 'BRADY',
  /** Term Loan */
  TermLoan = 'TERM',
  /** Bankers Acceptance */
  BankersAcceptance = 'BA',
  /** Asset-backed Securities */
  AssetBackedSecurities = 'ABS',
  /** Other Anticipation Notes (BAN, GAN, etc.) */
  OtherAnticipationNotes = 'AN',
  /** Mutual Fund */
  MutualFund = 'MF',
  /** Federal Agency Coupon */
  FederalAgencyCoupon = 'FAC',
  /** Corporate Private Placement */
  CorporatePrivatePlacement = 'CPP',
  /** Non-deliverable forward */
  NonDeliverableForward = 'FXNDF',
  Cap = 'CAP',
  /** Preferred Stock */
  PreferredStock = 'PS',
  /** Forward */
  Forward = 'FORWARD',
  /** Canadian Treasury Notes */
  CanadianTreasuryNotes = 'CAN',
  /** Revolver Loan */
  RevolverLoan = 'RVLV',
  /** Bank Depository Note */
  BankDepositoryNote = 'BDN',
  /** Canadian Mortgage Bonds */
  CanadianMortgageBonds = 'CMB',
  /** Certificate Of Obligation */
  CertificateOfObligation = 'COFO',
  /** Multileg Instrument */
  MultilegInstrument = 'MLEG',
  /** Federal Agency Discount Note */
  FederalAgencyDiscountNote = 'FADN',
  /** Convertible Bond */
  ConvertibleBond = 'CB',
  /** FX Spot */
  FXSpot = 'FXSPOT',
  /** Credit Default Swap */
  CreditDefaultSwap = 'CDS',
  /** Depository Receipts */
  DepositoryReceipts = 'DR',
  /** Buy Sellback */
  BuySellback = 'BUYSELL',
  /** Canadian Treasury Bills */
  CanadianTreasuryBills = 'CTB',
  /** Revolver/Term Loan */
  Revolver = 'RVLVTRM',
  /** Bank Notes */
  BankNotes = 'BN',
  /** Corp. Mortgage-backed Securities */
  Corp = 'CMBS',
  /** Certificate Of Participation */
  CertificateOfParticipation = 'COFP',
  /** No Security Type */
  NoSecurityType = 'NONE',
  /** US Treasury Note (Deprecated Value Use TNOTE) */
  USTreasuryNoteOld = 'UST',
  PrivateExportFunding = 'PEF',
  /** Dual Currency */
  DualCurrency = 'DUAL',
  /** FX Forward */
  FXForward = 'FXFWD',
  Collar = 'CLLR',
  /** Securities Loan */
  SecuritiesLoan = 'SECLOAN',
  EuroSovereigns = 'EUSOV',
  /** Bridge Loan */
  BridgeLoan = 'BRIDGE',
  /** Bill Of Exchanges */
  BillOfExchanges = 'BOX',
  /** Collateralized Mortgage Obligation */
  CollateralizedMortgageObligation = 'CMO',
  /** General Obligation Bonds */
  GeneralObligationBonds = 'GO',
  /** US Treasury Bill (Deprecated Value Use TBILL) */
  USTreasuryBillOld = 'USTB',
  USDSupranationalCoupons = 'SUPRA',
  /** Euro Corporate Bond */
  EuroCorporateBond = 'EUCORP',
  /** FX Swap */
  FXSwap = 'FXSWAP',
  /** Commodity swap */
  CommoditySwap = 'CMDTYSWAP',
  /** Securities Pledge */
  SecuritiesPledge = 'SECPLEDGE',
  /** Canadian Provincial Bonds */
  CanadianProvincialBonds = 'PROV',
  /** Letter Of Credit */
  LetterOfCredit = 'LOFC',
  /** Canadian Money Markets */
  CanadianMoneyMarkets = 'CAMM',
  /** IOETTE Mortgage */
  IOETTEMortgage = 'IET',
  /** Mandatory Tender */
  MandatoryTender = 'MT',
  /** Euro Corporate Floating Rate Notes */
  EuroCorporateFloatingRateNotes = 'EUFRN',
  /** Non-deliverable Swap */
  NonDeliverableSwap = 'FXNDS',
  /** Exotic */
  Exotic = 'EXOTIC',
  /** Delivery versus pledge */
  DeliveryVersusPledge = 'DVPLDG',
  /** Treasury Bill - non US */
  TreasuryBill = 'TB',
  /** Swing Line Facility */
  SwingLineFacility = 'SWING',
  /** Certificate Of Deposit */
  CertificateOfDeposit = 'CD',
  /** Mortgage-backed Securities */
  MortgageBackedSecurities = 'MBS',
  /** Revenue Anticipation Note */
  RevenueAnticipationNote = 'RAN',
  /** Wildcard entry for use on Security Definition Request */
  Wildcard = '?',
  /** US Corporate Floating Rate Notes */
  USCorporateFloatingRateNotes = 'FRN',
  /** FX Bank Note */
  FXBankNote = 'FXBN',
  /** Options on Combo */
  OptionsOnCombo = 'OOC',
  Floor = 'FLR',
  CollateralBasket = 'COLLBSKT',
  /** US Treasury Bond */
  USTreasuryBond = 'TBOND',
  /** Debtor In Possession */
  DebtorInPossession = 'DINP',
  /** Call Loans */
  CallLoans = 'CL',
  /** Mortgage Interest Only */
  MortgageInterestOnly = 'MIO',
  /** Revenue Bonds */
  RevenueBonds = 'REV',
  /** Cash */
  Cash = 'CASH',
  /** Indexed Linked */
  IndexedLinked = 'XLINKD',
  ForeignCurrencyDiscountNote = 'FXDN',
  /** Forward Rate Agreement */
  FRA = 'FRA',
  /** Structured finance product */
  StructuredFinanceProduct = 'SFP',
  /** Interest Strip From Any Bond Or Note */
  InterestStripFromAnyBondOrNote = 'TINT',
  /** Defaulted */
  Defaulted = 'DEFLTED',
  /** Commercial Paper */
  CommercialPaper = 'CP',
  /** Mortgage Principal Only */
  MortgagePrincipalOnly = 'MPO',
  /** Special Assessment */
  SpecialAssessment = 'SPCLA',
  /** Other */
  Other = 'Other',
  /** Structured Notes */
  StructuredNotes = 'STRUCT',
  /** Future */
  Future = 'FUT',
  /** US Treasury Bill */
  USTreasuryBill = 'TBILL',
  /** Treasury Inflation Protected Securities */
  TreasuryInflationProtectedSecurities = 'TIPS',
  /** Withdrawn */
  Withdrawn = 'WITHDRN',
  /** Deposit Notes */
  DepositNotes = 'DN',
  /** Mortgage Private Placement */
  MortgagePrivatePlacement = 'MPP',
  /** Special Obligation */
  SpecialObligation = 'SPCLO',
  /** Exchange traded note */
  ExchangeTradedNote = 'ETN',
  /** Yankee Corporate Bond */
  YankeeCorporateBond = 'YANK',
  /** Derivative forward */
  DerivativeForward = 'FWD',
  /** Margin loan */
  MarginLoan = 'MRGNLOAN',
  /** Principal Strip Of A Callable Bond Or Note */
  PrincipalStripOfACallableBondOrNote = 'TCAL',
  /** Replaced */
  Replaced = 'REPLACD',
  /** Euro Certificate Of Deposit */
  EuroCertificateOfDeposit = 'EUCD',
  /** Miscellaneous Pass-through */
  MiscellaneousPassThrough = 'MPT',
  /** Special Tax */
  SpecialTax = 'SPCLT',
  /** Offshore issued Chinese Yuan (CNY) denominated corporate bond */
  OffshoreIssuedChineseYuanCorporateBond = 'DIMSUMCORP',
  /** Interest Rate Swap */
  InterestRateSwap = 'IRS',
  /** Total return swap */
  TotalReturnSwap = 'TRS',
  /** Principal Strip From A Non-Callable Bond Or Note */
  PrincipalStripFromANonCallableBondOrNote = 'TPRN',
  /** Matured */
  Matured = 'MATURED',
  /** Euro Commercial Paper */
  EuroCommercialPaper = 'EUCP',
  Pfandbrief = 'PFAND',
  /** Tax Anticipation Note */
  TaxAnticipationNote = 'TAN',
  /** Securitized derivative */
  SecuritizedDerivative = 'SECDERIV',
  /** Preferred Corporate Bond */
  PreferredCorporateBond = 'PRCORP',
  /** Loan/lease */
  LoanLease = 'LOANLEASE',
  /** US Treasury Note */
  USTreasuryNote = 'TNOTE',
  /** Amended and restated */
  Amended = 'AMENDED',
  /** Liquidity Note */
  LiquidityNote = 'LQN',
  /** To Be Announced */
  ToBeAnnounced = 'TBA',
  /** Tax Allocation */
  TaxAllocation = 'TAXA',
  /** Exchange Traded Fund */
  ExchangeTradedFund = 'ETF',
  /** Offshore issued Chinese Yuan (CNY) denominated sovereign bond */
  OffshoreIssuedChineseYuanSovereignBond = 'DIMSUMSOV',
  /** Retired */
  Retired = 'RETIRED',
  /** Medium Term Notes */
  MediumTermNotes = 'MTN',
  /** Tax Exempt Commercial Paper */
  TaxExemptCommercialPaper = 'TECP',
  DigitalAsset = 'DIGITAL',
  /** Options on Futures */
  OptionsOnFutures = 'OOF',
  SovereignBond = 'SOV',
  /** Overnight */
  Overnight = 'ONITE',
  /** Taxable Municipal CP */
  TaxableMunicipalCP = 'TMCP',
  /** Options on Physical - use not recommended */
  OptionsOnPhysical = 'OOP',
  /** US Treasury Floating Rate Note */
  USTreasuryFloatingRateNote = 'TFRN',
  /** Promissory Note */
  PromissoryNote = 'PN',
  /** Short Term Loan Note */
  ShortTermLoanNote = 'STN',
  /** Tax Revenue Anticipation Note */
  TaxRevenueAnticipationNote = 'TRAN',
  /** Option */
  Option = 'OPT',
  /** Plazos Fijos */
  PlazosFijos = 'PZFJ',
  /** Variable Rate Demand Note */
  VariableRateDemandNote = 'VRDN',
  /** Spot forward */
  SpotForward = 'SPOTFWD',
  /** Secured Liquidity Note */
  SecuredLiquidityNote = 'SLQN',
  /** Warrant */
  Warrant = 'WAR',
  /** Swap option */
  SwapOption = 'SWAPTION',
  /** Time Deposit */
  TimeDeposit = 'TD',
  /** Municipal Interest Bearing Commercial Paper */
  MunicipalInterestBearingCommercialPaper = 'MCPIB',
  /** Transmission */
  Transmission = 'XMISSION',
  /** Taxable Municipal Bond */
  TaxableMunicipalBond = 'TMB',
  /** General type for a contract based on an established index */
  Index = 'INDEX',
  /** Term Liquidity Note */
  TermLiquidityNote = 'TLQN',
  /** Variable Rate Demand Obligation */
  VariableRateDemandObligation = 'VRDO',
  /** Bond basket */
  BondBasket = 'BDBSKT',
  /** Extended Comm Note */
  ExtendedCommNote = 'XCN',
  /** Contract for difference */
  ContractForDifference = 'CFD',
  /** Yankee Certificate Of Deposit */
  YankeeCertificateOfDeposit = 'YCD',
  /** Correlation swap */
  CorrelationSwap = 'CRLTNSWAP',
  BankAcceptedBill = 'BAB',
  /** Dividend swap */
  DiviendSwap = 'DVDNDSWAP',
  /** Short Term Bank Note */
  ShortTermBankNote = 'BNST',
  /** Equity basket */
  EquityBasket = 'EQBSKT',
  /** Callable Commercial Paper */
  CallableCommercialPaper = 'CLCP',
  /** Equity forward */
  EquityForward = 'EQFWD',
  /** Commercial Note */
  CommercialNote = 'CN',
  /** Return swap */
  ReturnSwap = 'RTRNSWAP',
  /** Interest Bearing Commercial Paper */
  InterestBearingCommercialPaper = 'CPIB',
  /** Variance swap */
  VarianceSwap = 'VARSWAP',
  /** Euro Medium Term Note */
  EuroMediumTermNote = 'EUMTN',
  /** Portfolio swap */
  PortfolioSwaps = 'PRTFLIOSWAP',
  /** Euro Negotiable Commercial Paper */
  EuroNegotiableCommercialPaper = 'EUNCP',
  /** Futures on a Swap */
  FuturesOnASwap = 'FUTSWAP',
  /** Euro Structured Liquidity Note */
  EuroStructuredLiquidityNote = 'EUSTLQN',
  /** Forwards on a Swap */
  ForwardsOnASwap = 'FWDSWAP',
  /** Euro Time Deposit */
  EuroTimeDeposit = 'EUTD',
  /** Forward Freight Agreement */
  ForwardFreightAgreement = 'FWDFRTAGMT',
  /** Jumbo Certificate of Deposit */
  JumboCertificateOfDeposit = 'JCD',
  /** Spread Betting */
  SpreadBetting = 'SPREADBET',
  /** Money Market Fund */
  MoneyMarketFund = 'MMF',
  /** Exchange traded commodity */
  ExchangeTradedCommodity = 'ETC',
  MasterNote = 'MN',
  /** Negotiable Certificate of Deposit */
  NegotiableCertificateOfDeposit = 'NCD',
  /** Negotiable Commercial Paper */
  NegotiableCommercialPaper = 'NCP',
  /** Retail Certificate of Deposit */
  RetailCertificateOfDeposit = 'RCD',
  /** Term Deposit Receipt */
  TermDepositReceipt = 'TDR',
}
