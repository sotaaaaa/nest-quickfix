/**
 * Specifies the boundary condition to be used for the event price relative to the underlying price at the point the complex event outcome takes effect as determined by the ComplexEventPriceTimeType.
 * tag: 1487
 * @readonly
 * @enum {number} (int)
 */
export enum ComplexEventPriceBoundaryMethod {
  /** Less than ComplexEventPrice(1486) */
  LessThanComplexEventPrice = 1,
  /** Less than or equal to ComplexEventPrice(1486) */
  LessThanOrEqualToComplexEventPrice = 2,
  /** Equal to ComplexEventPrice(1486) */
  EqualToComplexEventPrice = 3,
  /** Greater than or equal to ComplexEventPrice(1486) */
  GreaterThanOrEqualToComplexEventPrice = 4,
  /** Greater than ComplexEventPrice(1486) */
  GreaterThanComplexEventPrice = 5,
}
