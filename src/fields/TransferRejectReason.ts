/**
 * Reason the transfer instruction was rejected.
 * tag: 2443
 * @readonly
 * @enum {number} (int)
 */
export enum TransferRejectReason {
  /** Success */
  Success = 0,
  /** Invalid party */
  InvalidParty = 1,
  /** Unknown instrument */
  UnknownInstrument = 2,
  /** Not authorized to submit transfers */
  UnauthorizedToSubmitXfer = 3,
  /** Unknown position */
  UnknownPosition = 4,
  /** Other */
  Other = 99,
}
