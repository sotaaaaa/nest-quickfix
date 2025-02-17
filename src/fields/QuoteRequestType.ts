/**
 * Indicates the type of Quote Request being generated
 * tag: 303
 * @readonly
 * @enum {number} (int)
 */
export enum QuoteRequestType {
  /** Manual */
  Manual = 1,
  /** Automatic */
  Automatic = 2,
  /** Confirm quote */
  ConfirmQuote = 3,
}
