/**
 * Identifies the type of request that a Cancel Reject is in response to.
 * tag: 434
 * @readonly
 * @enum {string} (char)
 */
export enum CxlRejResponseTo {
  /** Order cancel request */
  OrderCancelRequest = '1',
  /** Order cancel/replace request */
  OrderCancelReplaceRequest = '2',
}
