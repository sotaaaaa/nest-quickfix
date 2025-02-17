/**
 * Used to specify the day of the week in which the reset occurs for payments that reset on a weekly basis.
 * tag: 40766
 * @readonly
 * @enum {string} (String)
 */
export enum PaymentStreamResetWeeklyRollConvention {
  /** Monday */
  Monday = 'MON',
  /** Tuesday */
  Tuesday = 'TUE',
  /** Wednesday */
  Wednesday = 'WED',
  /** Thursday */
  Thursday = 'THU',
  /** Friday */
  Friday = 'FRI',
  /** Saturday */
  Saturday = 'SAT',
  /** Sunday */
  Sunday = 'SUN',
}
