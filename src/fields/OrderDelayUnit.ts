/**
 * Time unit in which the OrderDelay(1428) is expressed
 * tag: 1429
 * @readonly
 * @enum {number} (int)
 */
export enum OrderDelayUnit {
  /** Seconds (default if not specified) */
  Seconds = 0,
  /** Tenths of a second */
  TenthsOfASecond = 1,
  /** Hundredths of a second */
  HundredthsOfASecond = 2,
  /** milliseconds */
  Milliseconds = 3,
  /** microseconds */
  Microseconds = 4,
  /** nanoseconds */
  Nanoseconds = 5,
  /** minutes */
  Minutes = 10,
  /** hours */
  Hours = 11,
  /** days */
  Days = 12,
  /** weeks */
  Weeks = 13,
  /** months */
  Months = 14,
  /** years */
  Years = 15,
}
