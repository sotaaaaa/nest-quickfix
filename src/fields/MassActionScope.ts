/**
 * Specifies scope of Order Mass Action Request.
 * tag: 1374
 * @readonly
 * @enum {number} (int)
 */
export enum MassActionScope {
  /** All orders for a security */
  AllOrdersForASecurity = 1,
  /** All orders for an underlying security */
  AllOrdersForAnUnderlyingSecurity = 2,
  /** All orders for a product */
  AllOrdersForAProduct = 3,
  /** All orders for a CFI Code */
  AllOrdersForACFICode = 4,
  /** All orders for a security type */
  AllOrdersForASecurityType = 5,
  /** All orders for a trading session */
  AllOrdersForATradingSession = 6,
  /** All orders */
  AllOrders = 7,
  /** All orders for a market */
  AllOrdersForAMarket = 8,
  /** All orders for a market segment (or multiple segments) */
  AllOrdersForAMarketSegment = 9,
  /** All orders for a security group */
  AllOrdersForASecurityGroup = 10,
  /** All orders for an issuer */
  CancelForSecurityIssuer = 11,
  /** All orders for an issuer of underlying security */
  CancelForIssuerOfUnderlyingSecurity = 12,
}
