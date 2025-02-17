/**
 * Reason for execution rejection.
 * tag: 127
 * @readonly
 * @enum {string} (char)
 */
export enum DKReason {
  /** Unknown security */
  UnknownSymbol = 'A',
  /** Wrong side */
  WrongSide = 'B',
  /** Quantity exceeds order */
  QuantityExceedsOrder = 'C',
  /** No matching order */
  NoMatchingOrder = 'D',
  /** Price exceeds limit */
  PriceExceedsLimit = 'E',
  /** Calculation difference */
  CalculationDifference = 'F',
  /** No matching ExecutionReport(35=8) */
  NoMatchingExecutionReport = 'G',
  /** Other */
  Other = 'Z',
}
