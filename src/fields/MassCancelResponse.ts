/**
 * Specifies the action taken by counterparty order handling system as a result of the Order Mass Cancel Request
 * tag: 531
 * @readonly
 * @enum {string} (char)
 */
export enum MassCancelResponse {
  /** Cancel Request Rejected - See MassCancelRejectReason (532) */
  CancelRequestRejected = '0',
  /** Cancel orders for a security */
  CancelOrdersForASecurity = '1',
  /** Cancel orders for an underlying security */
  CancelOrdersForAnUnderlyingSecurity = '2',
  /** Cancel orders for a product */
  CancelOrdersForAProduct = '3',
  /** Cancel orders for a CFI Code */
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
  CancelOrdersForASecuritiesIssuer = 'B',
  /** Cancel orders for an issuer of underlying security */
  CancelOrdersForIssuerOfUnderlyingSecurity = 'C',
}
