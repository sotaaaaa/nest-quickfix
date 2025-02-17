/**
 * Indicates if the order is currently being worked. Applicable only for OrdStatus = "New". For open outcry markets this indicates that the order is being worked in the crowd. For electronic markets it indicates that the order has transitioned from a contingent order to a market order.
 * tag: 636
 * @readonly
 * @enum {string} (Boolean)
 */
export enum WorkingIndicator {
  /** Order has been accepted but not yet in a working state */
  NotWorking = 'N',
  /** Order is currently being worked */
  Working = 'Y',
}
