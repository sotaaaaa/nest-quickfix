/**
 * Action to take should throttle limit be exceeded.
 * tag: 1611
 * @readonly
 * @enum {number} (int)
 */
export enum ThrottleAction {
  /** Queue inbound */
  QueueInbound = 0,
  /** Queue outbound */
  QueueOutbound = 1,
  /** Reject */
  Reject = 2,
  /** Disconnect */
  Disconnect = 3,
  /** Warning */
  Warning = 4,
}
