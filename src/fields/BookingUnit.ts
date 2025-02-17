/**
 * Indicates what constitutes a bookable unit.
 * tag: 590
 * @readonly
 * @enum {string} (char)
 */
export enum BookingUnit {
  /** Each partial execution is a bookable unit */
  EachPartialExecutionIsABookableUnit = '0',
  /** Aggregate partial executions on this order, and book one trade per order */
  AggregatePartialExecutionsOnThisOrder = '1',
  /** Aggregate executions for this symbol, side, and settlement date */
  AggregateExecutionsForThisSymbol = '2',
}
