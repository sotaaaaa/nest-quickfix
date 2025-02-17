/**
 * Specifies a suitable settlement sub-method for a given settlement method.
 * tag: 2579
 * @readonly
 * @enum {number} (int)
 */
export enum SettlSubMethod {
  Shares = 1,
  Derivatives = 2,
  PaymentVsPayment = 3,
  Notional = 4,
  Cascade = 5,
  Repurchase = 6,
  Other = 99,
}
