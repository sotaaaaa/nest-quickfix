/**
 * Specifies the day or group of days for delivery.
 * tag: 41052
 * @readonly
 * @enum {number} (int)
 */
export enum DeliveryScheduleSettlDay {
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
  /** All weekdays */
  AllWeekdays = 8,
  /** All days */
  AllDays = 9,
  /** All weekends */
  AllWeekends = 10,
}
