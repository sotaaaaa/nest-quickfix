/**
 * The inflation lag period day type.
 * tag: 40810
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamInflationLagDayType {
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
