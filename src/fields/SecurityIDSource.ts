/**
 * Identifies class or source of the SecurityID(48) value.
 * tag: 22
 * @readonly
 * @enum {string} (String)
 */
export enum SecurityIDSource {
  /** CUSIP */
  CUSIP = '1',
  /** SEDOL */
  SEDOL = '2',
  /** QUIK */
  QUIK = '3',
  /** ISIN */
  ISINNumber = '4',
  /** RIC */
  RICCode = '5',
  /** ISO Currency Code (ISO 4217) */
  ISOCurrencyCode = '6',
  /** ISO Country Code */
  ISOCountryCode = '7',
  /** Exchange symbol */
  ExchangeSymbol = '8',
  /** Consolidated Tape Association (CTA) Symbol (SIAC CTS/CQS line format) */
  ConsolidatedTapeAssociation = '9',
  /** Bloomberg Symbol */
  BloombergSymbol = 'A',
  /** Wertpapier */
  Wertpapier = 'B',
  /** Dutch */
  Dutch = 'C',
  /** Valoren */
  Valoren = 'D',
  /** Sicovam */
  Sicovam = 'E',
  /** Belgian */
  Belgian = 'F',
  /** "Common" (Clearstream and Euroclear) */
  Common = 'G',
  /** Clearing house / Clearing organization */
  ClearingHouse = 'H',
  /** ISDA/FpML product specification (XML in SecurityXML(1185)) */
  ISDAFpMLSpecification = 'I',
  /** Option Price Reporting Authority */
  OptionPriceReportingAuthority = 'J',
  /** ISDA/FpML product URL (URL in SecurityID(48)) */
  ISDAFpMLURL = 'K',
  /** Letter of credit */
  LetterOfCredit = 'L',
  /** Marketplace-assigned Identifier */
  MarketplaceAssignedIdentifier = 'M',
  /** Markit RED entity CLIP */
  MarkitREDEntityCLIP = 'N',
  /** Markit RED pair CLIP */
  MarkitREDPairCLIP = 'P',
  /** CFTC commodity code */
  CFTCCommodityCode = 'Q',
  /** ISDA Commodity Reference Price */
  ISDACommodityReferencePrice = 'R',
  FinancialInstrumentGlobalIdentifier = 'S',
  /** Legal entity identifier */
  LegalEntityIdentifier = 'T',
  Synthetic = 'U',
  /** Fidessa Instrument Mnemonic (FIM) */
  FidessaInstrumentMnemonic = 'V',
  IndexName = 'W',
  /** Uniform Symbol (UMTF Symbol) */
  UniformSymbol = 'X',
  /** Digital Token Identifier (ISO 24165) */
  DigitalTokenIdentifier = 'Y',
}
