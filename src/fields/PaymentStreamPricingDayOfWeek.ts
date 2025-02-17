/**
 * The day of the week on which pricing takes place.
 * tag: 41228
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamPricingDayOfWeek {
  /** Every day (the default if not specified) */
  EveryDay = 0,
  /** Monday */
  Monday = 1,
  /** Tuesday */
  Tuesday = 2,
  /** Wednesday */
  Wednesday = 3,
  /** Thursday */
  Thursday = 4,
  /** Friday */
  Friday = 5,
  /** Saturday */
  Saturday = 6,
  /** Sunday */
  Sunday = 7,
}
