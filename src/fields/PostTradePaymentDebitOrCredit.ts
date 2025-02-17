/**
 * Payment side of this individual payment from the requesting firm's perspective.
 * tag: 2819
 * @readonly
 * @enum {number} (int)
 */
export enum PostTradePaymentDebitOrCredit {
  /** Debit / Pay */
  DebitPay = 0,
  /** Credit / Receive */
  CreditReceive = 1,
}
