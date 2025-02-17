/**
 * Describes action recipient should take if a throttle limit were exceeded.
 * tag: 1685
 * @readonly
 * @enum {number} (int)
 */
export enum ThrottleInst {
  /** Reject if throttle limit exceeded */
  RejectIfThrottleLimitExceeded = 0,
  /** Queue if throttle limit exceeded */
  QueueIfThrottleLimitExceeded = 1,
}
