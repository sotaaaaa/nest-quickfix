/**
 * Indicates whether a message was queued as a result of throttling.
 * tag: 1609
 * @readonly
 * @enum {number} (int)
 */
export enum ThrottleStatus {
  /** Throttle limit not exceeded, not queued */
  ThrottleLimitNotExceededNotQueued = 0,
  /** Queued due to throttle limit exceeded */
  QueuedDueToThrottleLimitExceeded = 1,
}
