/**
 * The type of attribute for the quote.
 * tag: 2707
 * @readonly
 * @enum {number} (int)
 */
export enum QuoteAttributeType {
  QuoteAboveStandardMarketSize = 0,
  QuoteAboveSpecificInstrumentSize = 1,
  QuoteApplicableForLiquidtyProvisionActivity = 2,
  QuoteIssuerStatus = 3,
  BidOrAskRequest = 4,
}
