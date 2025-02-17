/**
 * Reason for submission of mass action.
 * tag: 2675
 * @readonly
 * @enum {number} (int)
 */
export enum MassActionReason {
  /** No special reason (default) */
  None = 0,
  TradingRiskControl = 1,
  ClearingRiskControl = 2,
  MarketMakerProtection = 3,
  StopTrading = 4,
  EmergencyAction = 5,
  SessionLossLogout = 6,
  DuplicateLogin = 7,
  ProductNotTraded = 8,
  InstrumentNotTraded = 9,
  CompleInstrumentDeleted = 10,
  CircuitBreakerActivated = 11,
  /** Other */
  Other = 99,
}
