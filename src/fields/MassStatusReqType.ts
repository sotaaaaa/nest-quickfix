/**
 * Specifies the type or scope of the mass order status request.
 * tag: 585
 * @readonly
 * @enum {number} (int)
 */
export enum MassStatusReqType {
  /** Status for orders for a security */
  StatusForOrdersForASecurity = 1,
  /** Status for orders for an underlying security */
  StatusForOrdersForAnUnderlyingSecurity = 2,
  /** Status for orders for a product */
  StatusForOrdersForAProduct = 3,
  /** Status for orders for a CFI Code */
  StatusForOrdersForACFICode = 4,
  /** Status for orders for a security type */
  StatusForOrdersForASecurityType = 5,
  /** Status for orders for a trading session */
  StatusForOrdersForATradingSession = 6,
  /** Status for all orders */
  StatusForAllOrders = 7,
  /** Status for orders for a party identifier */
  StatusForOrdersForAPartyID = 8,
  /** Status for orders for an issuer */
  StatusForSecurityIssuer = 9,
  /** Status for orders for an issuer of underlying security */
  StatusForIssuerOfUnderlyingSecurity = 10,
}
