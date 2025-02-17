/**
 * Reason Order Mass Action Request was rejected
 * tag: 1376
 * @readonly
 * @enum {number} (int)
 */
export enum MassActionRejectReason {
  /** Mass action not supported */
  MassActionNotSupported = 0,
  /** Invalid or unknown security */
  InvalidOrUnknownSecurity = 1,
  /** Invalid or unknown underlying security */
  InvalidOrUnknownUnderlyingSecurity = 2,
  /** Invalid or unknown product */
  InvalidOrUnknownProduct = 3,
  /** Invalid or unknown CFI Code */
  InvalidOrUnknownCFICode = 4,
  /** Invalid or unknown security type */
  InvalidOrUnknownSecurityType = 5,
  /** Invalid or unknown trading session */
  InvalidOrUnknownTradingSession = 6,
  /** Invalid or unknown market */
  InvalidOrUnknownMarket = 7,
  /** Invalid or unknown market segment */
  InvalidOrUnknownMarketSegment = 8,
  /** Invalid or unknown security group */
  InvalidOrUnknownSecurityGroup = 9,
  /** Invalid or unknown issuer */
  InvalidOrUnknownSecurityIssuer = 10,
  /** Invalid or unknown issuer of underlying security */
  InvalidOrUnknownIssuerOfUnderlyingSecurity = 11,
  /** Other */
  Other = 99,
}
