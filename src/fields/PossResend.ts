/**
 * Indicates that message may contain information that has been sent under another sequence number.
 * tag: 97
 * @readonly
 * @enum {string} (Boolean)
 */
export enum PossResend {
  /** Original Transmission */
  OriginalTransmission = 'N',
  /** Possible Resend */
  PossibleResend = 'Y',
}
