/**
 * Identifies class or source of the Currency(15) value.
 * tag: 2897
 * @readonly
 * @enum {string} (String)
 */
export enum CurrencyCodeSource {
  /** CUSIP */
  CUSIP = '1',
  /** SEDOL */
  SEDOL = '2',
  /** ISIN */
  ISINNumber = '4',
  /** ISO Currency Code (ISO 4217) */
  ISOCurrencyCode = '6',
  FinancialInstrumentGlobalIdentifier = 'S',
  /** Digital Token Identifier (ISO 24165) */
  DigitalTokenIdentifier = 'Y',
}
