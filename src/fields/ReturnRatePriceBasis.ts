/**
 * The basis of the return price.
 * tag: 42766
 * @readonly
 * @enum {number} (int)
 */
export enum ReturnRatePriceBasis {
  Gross = 0,
  /** Net */
  Net = 1,
  /** Accrued */
  Accrued = 2,
  /** Clean net */
  CleanNet = 3,
}
