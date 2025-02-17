/**
 * Type of interval over which statistic is calculated.
 * tag: 2464
 * @readonly
 * @enum {number} (int)
 */
export enum MDStatisticIntervalType {
  SlidingWindow = 1,
  SlidingWindowPeak = 2,
  FixedDateRange = 3,
  FixedTimeRange = 4,
  CurrentTimeUnit = 5,
  PreviousTimeUnit = 6,
  MaximumRange = 7,
  MaximumRangeUpToPreviousTimeUnit = 8,
}
