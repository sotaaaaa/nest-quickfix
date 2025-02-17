/**
 * Specifies the day type of the relative payment date offset.
 * tag: 41159
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentDateOffsetDayType {
  /** Business */
  Business = 0,
  /** Calendar */
  Calendar = 1,
  /** Commodity business */
  Commodity = 2,
  /** Currency business */
  Currency = 3,
  /** Exchange business */
  Exchange = 4,
  /** Scheduled trading day */
  Scheduled = 5,
}
