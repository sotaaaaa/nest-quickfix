/**
 * The industry standard flow schedule by which electricity or natural gas is traded. Schedules may exist by regions and on-peak and off-peak status, such as "Western Peak".
 * tag: 1439
 * @readonly
 * @enum {number} (int)
 */
export enum FlowScheduleType {
  /** NERC Eastern Off-Peak */
  NERCEasternOffPeak = 0,
  /** NERC Western Off-Peak */
  NERCWesternOffPeak = 1,
  /** NERC Calendar-All Days in month */
  NERCCalendarAllDaysInMonth = 2,
  /** NERC Eastern Peak */
  NERCEasternPeak = 3,
  /** NERC Western Peak */
  NERCWesternPeak = 4,
  /** All times */
  AllTimes = 5,
  /** On peak */
  OnPeak = 6,
  /** Off peak */
  OffPeak = 7,
  /** Base */
  Base = 8,
  /** Block */
  Block = 9,
  /** Other */
  Other = 99,
}
