/**
 * Specifies the action taken by counterparty order handling system as a result of the action type indicated in MassActionType of the Order Mass Action Request.
 * tag: 1375
 * @readonly
 * @enum {number} (int)
 */
export enum MassActionResponse {
  /** Rejected - See MassActionRejectReason(1376) */
  Rejected = 0,
  /** Accepted */
  Accepted = 1,
  /** Completed */
  Completed = 2,
}
