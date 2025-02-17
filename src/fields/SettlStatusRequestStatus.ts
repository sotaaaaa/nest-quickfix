/**
 * Status of the SettlementStatusRequest(35=EC) message being responded to.
 * tag: 2966
 * @readonly
 * @enum {number} (int)
 */
export enum SettlStatusRequestStatus {
  /** Received, not yet processed */
  Received = 0,
  /** Accepted */
  Accepted = 1,
  Rejected = 2,
}
