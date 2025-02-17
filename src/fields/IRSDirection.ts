/**
 * Used to specify whether the principal is paying or receiving the fixed rate in an interest rate swap.
 * tag: 1933
 * @readonly
 * @enum {string} (String)
 */
export enum IRSDirection {
  Pay = 'PAY',
  /** Principal is receiving fixed rate */
  Rcv = 'RCV',
  /** Swap is float/float or fixed/fixed */
  NA = 'NA',
}
