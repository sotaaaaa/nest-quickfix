/**
 * The business day convention used for adjusting dates. The value defined here applies to all adjustable dates in the instrument unless specifically overridden.
 * tag: 40921
 * @readonly
 * @enum {number} (int)
 */
export enum BusinessDayConvention {
  NotApplicable = 0,
  /** None (current day) */
  None = 1,
  FollowingDay = 2,
  FloatingRateNote = 3,
  ModifiedFollowingDay = 4,
  PrecedingDay = 5,
  ModifiedPrecedingDay = 6,
  NearestDay = 7,
}
