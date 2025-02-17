/**
 * Indicates whether order has been triggered during its lifetime. Applies to cases where original information, e.g. OrdType(40), is modified when the order is triggered.
 * tag: 1823
 * @readonly
 * @enum {number} (int)
 */
export enum Triggered {
  /** Not triggered (default) */
  NotTriggered = 0,
  /** Triggered */
  Triggered = 1,
  /** Stop order triggered */
  StopOrderTriggered = 2,
  /** One Cancels the Other (OCO) order triggered */
  OCOOrderTriggered = 3,
  /** One Triggers the Other (OTO) order triggered */
  OTOOrderTriggered = 4,
  /** One Updates the Other (OUO) order triggered */
  OUOOrderTriggered = 5,
}
