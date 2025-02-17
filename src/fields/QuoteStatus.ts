/**
 * Identifies the status of the quote acknowledgement.
 * tag: 297
 * @readonly
 * @enum {number} (int)
 */
export enum QuoteStatus {
  /** Accepted */
  Accepted = 0,
  /** Canceled for specific securities */
  CancelForSymbol = 1,
  /** Canceled for specific SecurityTypes(167) */
  CanceledForSecurityType = 2,
  /** Canceled for underlying */
  CanceledForUnderlying = 3,
  /** Canceled all */
  CanceledAll = 4,
  /** Rejected */
  Rejected = 5,
  /** Removed from market */
  RemovedFromMarket = 6,
  Expired = 7,
  /** Query */
  Query = 8,
  /** Quote not found */
  QuoteNotFound = 9,
  /** Pending */
  Pending = 10,
  Pass = 11,
  /** Locked market warning */
  LockedMarketWarning = 12,
  /** Crossed market warning */
  CrossMarketWarning = 13,
  /** Canceled due to locked market */
  CanceledDueToLockMarket = 14,
  /** Canceled due to crossed market */
  CanceledDueToCrossMarket = 15,
  /** Active */
  Active = 16,
  /** Canceled */
  Canceled = 17,
  /** Unsolicited quote replenishment */
  UnsolicitedQuoteReplenishment = 18,
  /** Pending end trade */
  PendingEndTrade = 19,
  /** Too late to end */
  TooLateToEnd = 20,
  /** Traded */
  Traded = 21,
  /** Traded and removed */
  TradedAndRemoved = 22,
  ContractTerminates = 23,
}
