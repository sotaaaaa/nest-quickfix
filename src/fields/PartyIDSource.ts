export enum PartyIDSource {
  /** UK National Insurance or Pension Number */
  UKNationalInsuranceOrPensionNumber = '6',
  /** Korean Investor ID */
  KoreanInvestorID = '1',
  /** Directed broker three character acronym as defined in ISITC "ETC Best Practice" guidelines document */
  ISITCAcronym = 'I',
  /** BIC (Bank Identification Code - SWIFT managed) code (ISO9362 - See "Appendix 6-B") */
  BIC = 'B',
  /** US Social Security Number */
  USSocialSecurityNumber = '7',
  /** Taiwanese Qualified Foreign Investor ID QFII/FID */
  TaiwaneseForeignInvestorID = '2',
  /** Generally accepted market participant identifier (e.g. NASD mnemonic) */
  GeneralIdentifier = 'C',
  /** US Employer or Tax ID Number */
  USEmployerOrTaxIDNumber = '8',
  /** Taiwanese Trading Acct */
  TaiwaneseTradingAcct = '3',
  Proprietary = 'D',
  /** Australian Business Number */
  AustralianBusinessNumber = '9',
  /** Malaysian Central Depository (MCD) number */
  MalaysianCentralDepository = '4',
  /** ISO Country Code */
  ISOCountryCode = 'E',
  /** Australian Tax File Number */
  AustralianTaxFileNumber = 'A',
  /** Chinese Investor ID */
  ChineseInvestorID = '5',
  /** Settlement Entity Location (note if Local Market Settlement use "E=ISO Country Code") (see "Appendix 6-G" for valid values) */
  SettlementEntityLocation = 'F',
  /** Tax ID */
  TaxID = 'J',
  /** Market Identifier Code (ISO 10383) MIC */
  MIC = 'G',
  /** CSD participant/member code (e.g. Euroclear, DTC, CREST or Kassenverein number */
  CSDParticipant = 'H',
  /** Australian Company Number */
  AustralianCompanyNumber = 'K',
  /** Australian Registered Body Number */
  AustralianRegisteredBodyNumber = 'L',
  /** CFTC reporting firm identifier */
  CFTCReportingFirmIdentifier = 'M',
  /** Legal Entity Identifier (ISO 17442) LEI */
  LegalEntityIdentifier = 'N',
  InterimIdentifier = 'O',
  ShortCodeIdentifier = 'P',
  NationalIDNaturalPerson = 'Q',
  IndiaPermanentAccountNumber = 'R',
  FDID = 'S',
  SPSAID = 'T',
  MasterSPSAID = 'U',
}
