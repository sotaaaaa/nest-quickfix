/**
 * Flag that identifies a market data entry. (Prior to FIX 4.3 this field was of type char)
 * tag: 286
 * @readonly
 * @enum {string} (MultipleCharValue)
 */
export enum OpenCloseSettlFlag {
  /** Daily Open / Close / Settlement entry */
  DailyOpen = '0',
  /** Session Open / Close / Settlement entry */
  SessionOpen = '1',
  /** Delivery Settlement entry */
  DeliverySettlementEntry = '2',
  /** Expected entry */
  ExpectedEntry = '3',
  /** Entry from previous business day */
  EntryFromPreviousBusinessDay = '4',
  /** Theoretical Price value */
  TheoreticalPriceValue = '5',
}
