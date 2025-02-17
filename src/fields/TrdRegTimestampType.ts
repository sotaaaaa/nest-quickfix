export enum TrdRegTimestampType {
  ExecutionTime = 1,
  TimeIn = 2,
  TimeOut = 3,
  BrokerReceipt = 4,
  BrokerExecution = 5,
  DeskReceipt = 6,
  SubmissionToClearing = 7,
  TimePriority = 8,
  OrderbookEntryTime = 9,
  OrderSubmissionTime = 10,
  PubliclyReported = 11,
  PublicReportUpdated = 12,
  /** Non-publicly reported */
  NonPubliclyReported = 13,
  /** Non-public report updated */
  NonPublicReportUpdated = 14,
  /** Submitted for confirmation */
  SubmittedForConfirmation = 15,
  /** Updated for confirmation */
  UpdatedForConfirmation = 16,
  /** Confirmed */
  Confirmed = 17,
  /** Updated for clearing */
  UpdatedForClearing = 18,
  /** Cleared */
  Cleared = 19,
  /** Allocations submitted */
  AllocationsSubmitted = 20,
  /** Allocations updated */
  AllocationsUpdated = 21,
  /** Allocations completed */
  AllocationsCompleted = 22,
  /** Submitted to repository */
  SubmittedToRepository = 23,
  /** Post-trade continuation event */
  PostTrdContntnEvnt = 24,
  /** Post-trade valuation */
  PostTradeValuation = 25,
  PreviousTimePriority = 26,
  IdentifierAssigned = 27,
  PreviousIdentifierAssigned = 28,
  OrderCancellationTime = 29,
  OrderModificationTime = 30,
  OrderRoutingTime = 31,
  TradeCancellationTime = 32,
  TradeModificationTime = 33,
  ReferenceTimeForNBBO = 34,
  /** Affirmed */
  Affirmed = 35,
}
