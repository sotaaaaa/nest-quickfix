/**
 * Identifies an event related to a TradSesStatus(340). An event occurs and is gone, it is not a state that applies for a period of time.
 * tag: 1368
 * @readonly
 * @enum {number} (int)
 */
export enum TradSesEvent {
  /** Trading resumes (after Halt) */
  TradingResumes = 0,
  /** Change of Trading Session */
  ChangeOfTradingSession = 1,
  /** Change of Trading Subsession */
  ChangeOfTradingSubsession = 2,
  /** Change of Trading Status */
  ChangeOfTradingStatus = 3,
}
