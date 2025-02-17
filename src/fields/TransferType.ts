/**
 * Indicates the type of transfer request.
 * tag: 2440
 * @readonly
 * @enum {number} (int)
 */
export enum TransferType {
  /** Request transfer */
  RequestTransfer = 0,
  /** Accept transfer */
  AcceptTransfer = 1,
  /** Decline transfer */
  DeclineTransfer = 2,
}
