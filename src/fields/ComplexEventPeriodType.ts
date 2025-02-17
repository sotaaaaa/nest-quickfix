/**
 * Specifies the period type.
 * tag: 41011
 * @readonly
 * @enum {number} (int)
 */
export enum ComplexEventPeriodType {
  /** Asian Out */
  AsianOut = 0,
  /** Asian In */
  AsianIn = 1,
  /** Barrier Cap */
  BarrierCap = 2,
  /** Barrier Floor */
  BarrierFloor = 3,
  /** Knock Out */
  KnockOut = 4,
  /** Knock In */
  KnockIn = 5,
}
