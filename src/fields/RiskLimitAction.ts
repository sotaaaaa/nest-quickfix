/**
 * Identifies the action to take or risk model to assume should risk limit be exceeded or breached for the specified party.
 * tag: 1767
 * @readonly
 * @enum {number} (int)
 */
export enum RiskLimitAction {
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
  PingCreditCheckWithRevalidation = 5,
  PingCreditCheckNoRevalidation = 6,
  PushCreditCheckWithRevalidation = 7,
  PushCreditCheckNoRevalidation = 8,
  Suspend = 9,
  HaltTrading = 10,
}
