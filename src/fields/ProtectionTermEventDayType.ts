/**
 * Day type for events that specify a period and unit.
 * tag: 40197
 * @readonly
 * @enum {number} (int)
 */
export enum ProtectionTermEventDayType {
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
