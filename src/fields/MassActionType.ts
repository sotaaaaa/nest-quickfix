/**
 * Specifies the type of action requested
 * tag: 1373
 * @readonly
 * @enum {number} (int)
 */
export enum MassActionType {
  /** Suspend orders */
  SuspendOrders = 1,
  /** Release orders from suspension */
  ReleaseOrdersFromSuspension = 2,
  /** Cancel orders */
  CancelOrders = 3,
}
