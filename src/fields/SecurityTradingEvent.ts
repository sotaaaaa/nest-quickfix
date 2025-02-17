/**
 * Identifies an event related to a SecurityTradingStatus(326). An event occurs and is gone, it is not a state that applies for a period of time.
 * tag: 1174
 * @readonly
 * @enum {number} (int)
 */
export enum SecurityTradingEvent {
  /** Order imbalance, auction is extended */
  OrderImbalance = 1,
  /** Trading resumes (after Halt) */
  TradingResumes = 2,
  /** Price Volatility Interruption */
  PriceVolatilityInterruption = 3,
  /** Change of Trading Session */
  ChangeOfTradingSession = 4,
  /** Change of Trading Subsession */
  ChangeOfTradingSubsession = 5,
  /** Change of Security Trading Status */
  ChangeOfSecurityTradingStatus = 6,
  /** Change of Book Type */
  ChangeOfBookType = 7,
  /** Change of Market Depth */
  ChangeOfMarketDepth = 8,
  /** Corporate action */
  CorporateAction = 9,
}
