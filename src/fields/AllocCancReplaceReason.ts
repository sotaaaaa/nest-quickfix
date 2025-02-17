/**
 * Reason for cancelling or replacing an Allocation Instruction or Allocation Report message
 * tag: 796
 * @readonly
 * @enum {number} (int)
 */
export enum AllocCancReplaceReason {
  /** Original details incomplete/incorrect */
  OriginalDetailsIncomplete = 1,
  /** Change in underlying order details */
  ChangeInUnderlyingOrderDetails = 2,
  /** Cancelled by give-up firm */
  CancelledByGiveupFirm = 3,
  /** Other */
  Other = 99,
}
