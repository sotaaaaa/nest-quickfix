/**
 * Reason Quote was rejected:
 * tag: 300
 * @readonly
 * @enum {number} (int)
 */
export enum QuoteRejectReason {
  UnknownSymbol = 1,
  /** Exchange (security) closed */
  Exchange = 2,
  /** Quote Request exceeds limit */
  QuoteRequestExceedsLimit = 3,
  /** Too late to enter */
  TooLateToEnter = 4,
  /** Unknown quote */
  UnknownQuote = 5,
  /** Duplicate quote */
  DuplicateQuote = 6,
  /** Invalid bid/ask spread */
  InvalidBid = 7,
  InvalidPrice = 8,
  /** Not authorized to quote security */
  NotAuthorizedToQuoteSecurity = 9,
  /** Price exceeds current price band */
  PriceExceedsCurrentPriceBand = 10,
  /** Quote locked - unable to update/cancel */
  QuoteLocked = 11,
  /** Invalid or unknown security issuer */
  InvalidOrUnknownSecurityIssuer = 12,
  /** Invalid or unknown issuer of underlying security */
  InvalidOrUnknownIssuerOfUnderlyingSecurity = 13,
  /** Notional value exceeds threshold */
  NotionalValueExceedsThreshold = 14,
  /** Price exceeds current price band */
  PriceExceedsCurrentPriceBandDepr = 15,
  /** Reference price not available */
  ReferencePriceNotAvailable = 16,
  InsufficientCreditLimit = 17,
  /** Exceeded clip size limit */
  ExceededClipSizeLimit = 18,
  /** Exceeded maximum notional order amount */
  ExceededMaxNotionalOrderAmt = 19,
  /** Exceeded DV01/PV01 limit */
  ExceededDV01PV01Limit = 20,
  /** Exceeded CS01 limit */
  ExceededCS01Limit = 21,
  UnavailablePriceLiquidity = 22,
  InvalidMissingEntitlements = 23,
  UnknownAccounts = 24,
  Other = 99,
}
