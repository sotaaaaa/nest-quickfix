/**
 * The commodity's notional or quantity delivery frequency.
 * tag: 41308
 * @readonly
 * @enum {number} (int)
 */
export enum StreamNotionalCommodityFrequency {
  /** Term */
  Term = 0,
  /** Per business day */
  PerBusinessDay = 1,
  /** Per calculation period */
  PerCalculationPeriod = 2,
  /** Per settlement period */
  PerSettlPeriod = 3,
  /** Per calendar day */
  PerCalendarDay = 4,
  /** Per hour */
  PerHour = 5,
  /** Per month */
  PerMonth = 6,
}
