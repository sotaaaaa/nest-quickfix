/**
 * Reason for order being unaffected by mass action even though it belongs to the orders covered by MassActionScope(1374).
 * tag: 2677
 * @readonly
 * @enum {number} (int)
 */
export enum NotAffectedReason {
  /** Order suspended */
  OrderSuspended = 0,
  /** Instrument suspended */
  InstrumentSuspended = 1,
}
