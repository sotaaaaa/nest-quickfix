/**
 * Action that caused the event to occur.
 * tag: 1798
 * @readonly
 * @enum {number} (int)
 */
export enum OrderEventReason {
  /** Add order request */
  AddOrderRequest = 1,
  /** Modify order request */
  ModifyOrderRequest = 2,
  /** Delete order request */
  DeleteOrderRequest = 3,
  /** Order entered out-of-band */
  OrderEnteredOOB = 4,
  /** Order modified out-of-band */
  OrderModifiedOOB = 5,
  /** Order deleted out-of-band */
  OrderDeletedOOB = 6,
  /** Order activated or triggered */
  OrderActivatedOrTriggered = 7,
  /** Order expired */
  OrderExpired = 8,
  /** Reserve order refreshed */
  ReserveOrderRefreshed = 9,
  /** Away market better */
  AwayMarketBetter = 10,
  /** Corporate action */
  CorporateAction = 11,
  /** Start of day */
  StartOfDay = 12,
  /** End of day */
  EndOfDay = 13,
}
