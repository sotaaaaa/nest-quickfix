/**
 * Identifies the type of payment stream associated with the swap.
 * tag: 40738
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamType {
  /** Periodic (default) */
  Periodic = 0,
  /** Initial */
  Initial = 1,
  /** Single */
  Single = 2,
  /** Dividend */
  Dividend = 3,
  /** Interest */
  Interest = 4,
  /** Dividend return */
  DividendReturn = 5,
  /** Price return */
  PriceReturn = 6,
  /** Total return */
  TotalReturn = 7,
  /** Variance */
  Variance = 8,
  /** Correlation */
  Correlation = 9,
}
