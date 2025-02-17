/**
 * Identifies the status of an individual quote. See also QuoteStatus(297) which is used for single Quotes.
 * tag: 1167
 * @readonly
 * @enum {number} (int)
 */
export enum QuoteEntryStatus {
  /** Accepted */
  Accepted = 0,
  /** Rejected */
  Rejected = 5,
  /** Removed from Market */
  RemovedFromMarket = 6,
  /** Expired */
  Expired = 7,
  /** Locked Market Warning */
  LockedMarketWarning = 12,
  /** Cross Market Warning */
  CrossMarketWarning = 13,
  /** Canceled due to Lock Market */
  CanceledDueToLockMarket = 14,
  /** Canceled due to Cross Market */
  CanceledDueToCrossMarket = 15,
  /** Active */
  Active = 16,
}
