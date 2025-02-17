/**
 * Indicates whether or not message is being sent as a result of a subscription request or not.
 * tag: 325
 * @readonly
 * @enum {string} (Boolean)
 */
export enum UnsolicitedIndicator {
  /** Message is being sent as a result of a prior request */
  MessageIsBeingSentAsAResultOfAPriorRequest = 'N',
  /** Message is being sent unsolicited */
  MessageIsBeingSentUnsolicited = 'Y',
}
