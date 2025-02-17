/**
 * The status of this execution acknowledgement message.
 * tag: 1036
 * @readonly
 * @enum {string} (char)
 */
export enum ExecAckStatus {
  /** Received, not yet processed */
  Received = '0',
  /** Accepted */
  Accepted = '1',
  /** Don't know / Rejected */
  DontKnow = '2',
}
