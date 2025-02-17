/**
 * Identifies the type of quote cancel.
 * tag: 298
 * @readonly
 * @enum {number} (int)
 */
export enum QuoteCancelType {
  /** Cancel quotes for one or more securities */
  CancelForOneOrMoreSecurities = 1,
  /** Cancel quotes for security type(s) */
  CancelForSecurityType = 2,
  /** Cancel quotes for underlying security */
  CancelForUnderlyingSecurity = 3,
  /** Cancel all quotes */
  CancelAllQuotes = 4,
  CancelSpecifiedSingleQuote = 5,
  CancelByTypeOfQuote = 6,
  /** Cancel quotes for an issuer */
  CancelForSecurityIssuer = 7,
  /** Cancel quotes for an issuer of underlying security */
  CancelForIssuerOfUnderlyingSecurity = 8,
}
