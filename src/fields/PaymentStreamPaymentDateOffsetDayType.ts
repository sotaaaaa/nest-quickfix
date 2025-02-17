/**
 * Specifies the day type of the relative payment date offset.
 * tag: 40920
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamPaymentDateOffsetDayType {
  /** Business */
  Business = 0,
  /** Calendar */
  Calendar = 1,
  /** Commodity business */
  CommodityBusiness = 2,
  /** Currency business */
  CurrencyBusiness = 3,
  /** Exchange business */
  ExchangeBusiness = 4,
  /** Scheduled trading day */
  ScheduledTradingDay = 5,
}
