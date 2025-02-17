/**
 * Reason Quote was rejected:
 * tag: 658
 * @readonly
 * @enum {number} (int)
 */
export enum QuoteRequestRejectReason {
  UnknownSymbol = 1,
  /** Exchange (Security) Closed */
  Exchange = 2,
  QuoteRequestExceedsLimit = 3,
  /** Too Late to enter */
  TooLateToEnter = 4,
  /** Invalid Price */
  InvalidPrice = 5,
  /** Not Authorized To Request Quote */
  NotAuthorizedToRequestQuote = 6,
  /** No Match For Inquiry */
  NoMatchForInquiry = 7,
  NoMarketForInstrument = 8,
  /** No Inventory */
  NoInventory = 9,
  /** Pass */
  Pass = 10,
  InsufficientCredit = 11,
  /** Exceeded clip size limit */
  ExceededClipSizeLimit = 12,
  /** Exceeded maximum notional order amount */
  ExceededMaxNotionalOrderAmt = 13,
  /** Exceeded DV01/PV01 limit */
  ExceededDV01PV01Limit = 14,
  /** Exceeded CS01 limit */
  ExceededCS01Limit = 15,
  UnavailablePriceLiquidity = 16,
  UnmetRegulatoryRequirement = 17,
  UnknownAccounts = 18,
  InvalidMissingEntitlements = 19,
  Other = 99,
}
