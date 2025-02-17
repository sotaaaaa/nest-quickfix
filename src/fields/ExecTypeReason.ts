/**
 * The initiating event when an ExecutionReport(35=8) is sent.
 * tag: 2431
 * @readonly
 * @enum {number} (int)
 */
export enum ExecTypeReason {
  /** Order added upon request */
  OrdAddedOnRequest = 1,
  /** Order replaced upon request */
  OrdReplacedOnRequest = 2,
  /** Order cancelled upon request */
  OrdCxldOnRequest = 3,
  /** Unsolicited order cancellation */
  UnsolicitedOrdCxl = 4,
  /** Non-resting order added upon request */
  NonRestingOrdAddedOnRequest = 5,
  /** Order replaced with non-resting order upon request */
  OrdReplacedWithNonRestingOrdOnRequest = 6,
  /** Trigger order replaced upon request */
  TriggerOrdReplacedOnRequest = 7,
  /** Suspended order replaced upon request */
  SuspendedOrdReplacedOnRequest = 8,
  /** Suspended order canceled upon request */
  SuspendedOrdCxldOnRequest = 9,
  /** Order cancellation pending */
  OrdCxlPending = 10,
  /** Pending cancellation executed */
  PendingCxlExecuted = 11,
  /** Resting order triggered */
  RestingOrdTriggered = 12,
  /** Suspended order activated */
  SuspendedOrdActivated = 13,
  /** Active order suspended */
  ActiveOrdSuspended = 14,
  /** Order expired */
  OrdExpired = 15,
}
