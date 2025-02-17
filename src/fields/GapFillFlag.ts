/**
 * Indicates that the Sequence Reset message is replacing administrative or application messages which will not be resent.
 * tag: 123
 * @readonly
 * @enum {string} (Boolean)
 */
export enum GapFillFlag {
  /** Sequence Reset, Ignore Msg Seq Num (N/A For FIXML - Not Used) */
  SequenceReset = 'N',
  /** Gap Fill Message, Msg Seq Num Field Valid */
  GapFillMessage = 'Y',
}
