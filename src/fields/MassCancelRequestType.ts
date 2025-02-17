/**
 * Specifies scope of Order Mass Cancel Request.
 * tag: 530
 * @readonly
 * @enum {string} (char)
 */
export enum MassCancelRequestType {
  /** Cancel orders for a security */
  CancelOrdersForASecurity = '1',
  /** Cancel orders for an underlying security */
  CancelOrdersForAnUnderlyingSecurity = '2',
  /** Cancel orders for a product */
  CancelOrdersForAProduct = '3',
  /** Cancel orders for a CFICode */
  CancelOrdersForACFICode = '4',
  /** Cancel orders for a security type */
  CancelOrdersForASecurityType = '5',
  /** Cancel orders for a trading session */
  CancelOrdersForATradingSession = '6',
  /** Cancel all orders */
  CancelAllOrders = '7',
  /** Cancel orders for a market */
  CancelOrdersForAMarket = '8',
  /** Cancel orders for a market segment */
  CancelOrdersForAMarketSegment = '9',
  /** Cancel orders for a security group */
  CancelOrdersForASecurityGroup = 'A',
  /** Cancel orders for an issuer */
  CancelOrdersForSecurityIssuer = 'B',
  /** Cancel orders for an issuer of underlying security */
  CancelForIssuerOfUnderlyingSecurity = 'C',
}
