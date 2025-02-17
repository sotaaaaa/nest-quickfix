/**
 * Used to indicate whether the quoting system allows only one quote to be active at a time for the quote issuer or market maker.
 * tag: 2837
 * @readonly
 * @enum {string} (Boolean)
 */
export enum SingleQuoteIndicator {
  /** Multiple quotes allowed */
  MultipleQuotesAllowed = 'N',
  /** Only one quote allowed */
  OnlyOneQuoteAllowed = 'Y',
}
