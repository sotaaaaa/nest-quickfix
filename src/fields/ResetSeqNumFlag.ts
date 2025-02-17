/**
 * Indicates that both sides of the FIX session should reset sequence numbers.
 * tag: 141
 * @readonly
 * @enum {string} (Boolean)
 */
export enum ResetSeqNumFlag {
  /** No */
  No = 'N',
  /** Yes, reset sequence numbers */
  Yes = 'Y',
}
