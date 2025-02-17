/**
 * Specifies whether a quote is public, i.e. available to the market, or private, i.e. available to a specified counterparty only.
 * tag: 1171
 * @readonly
 * @enum {string} (Boolean)
 */
export enum PrivateQuote {
  /** Private Quote */
  PrivateQuote = 'Y',
  /** Public Quote */
  PublicQuote = 'N',
}
