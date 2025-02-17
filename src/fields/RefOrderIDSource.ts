/**
 * Used to specify the source for the identifier in RefOrderID(1080). This can be an identifier provided in order depth market data when hitting (taking) a specific order or to identify what type of order or quote reference is being provided when seeking credit limit check. In the context of US CAT this can be used to identify related orders and quotes which are parent, previous, or manual orders or quotes. Previous relates to orders changing their unique system assigned order identifier.
 * tag: 1081
 * @readonly
 * @enum {string} (char)
 */
export enum RefOrderIDSource {
  SecondaryOrderID = '0',
  OrderID = '1',
  MDEntryID = '2',
  QuoteEntryID = '3',
  OriginalOrderID = '4',
  QuoteID = '5',
  QuoteReqID = '6',
  PreviousOrderIdentifier = '7',
  PreviousQuoteIdentifier = '8',
  ParentOrderIdentifier = '9',
  ManualOrderIdentifier = 'A',
}
