/**
 * The reason for restatement when an ExecutionReport(35=8) or TradeCaptureReport(35=AE) message is sent with ExecType(150) = D (Restated) or used when communicating an unsolicited cancel.
 * tag: 378
 * @readonly
 * @enum {number} (int)
 */
export enum ExecRestatementReason {
  /** GT corporate action */
  GTCorporateAction = 0,
  /** GT renewal / restatement (no corporate action) */
  GTRenewal = 1,
  /** Verbal change */
  VerbalChange = 2,
  /** Repricing of order */
  RepricingOfOrder = 3,
  /** Broker option */
  BrokerOption = 4,
  /** Partial decline of OrderQty (e.g. exchange initiated partial cancel) */
  PartialDeclineOfOrderQty = 5,
  /** Cancel on Trading Halt */
  CancelOnTradingHalt = 6,
  /** Cancel on System Failure */
  CancelOnSystemFailure = 7,
  /** Market (Exchange) option */
  Market = 8,
  /** Canceled, not best */
  Canceled = 9,
  /** Warehouse Recap */
  WarehouseRecap = 10,
  /** Peg Refresh */
  PegRefresh = 11,
  /** Cancel On Connection Loss */
  CancelOnConnectionLoss = 12,
  /** Cancel On Logout */
  CancelOnLogout = 13,
  /** Assign Time Priority */
  AssignTimePriority = 14,
  /** Cancelled, Trade Price Violation */
  CancelledForTradePriceViolation = 15,
  /** Cancelled, Cross Imbalance */
  CancelledForCrossImbalance = 16,
  CxldSMP = 17,
  CxldSMPAggressive = 18,
  CxldSMPPassive = 19,
  CxldSMPAggressivePassive = 20,
  /** Other */
  Other = 99,
}
