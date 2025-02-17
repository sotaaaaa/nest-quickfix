/**
 * Indicates the type of transfer.
 * tag: 2441
 * @readonly
 * @enum {number} (int)
 */
export enum TransferScope {
  /** Inter-firm transfer */
  InterFirmTransfer = 0,
  /** Intra-firm transfer */
  IntraFirmTransfer = 1,
  /** Clearing Member Trade Assignment */
  CMTA = 2,
}
