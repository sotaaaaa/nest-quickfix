/**
 * Code to represent the status type.
 * tag: 429
 * @readonly
 * @enum {number} (int)
 */
export enum ListStatusType {
  /** Ack */
  Ack = 1,
  /** Response */
  Response = 2,
  /** Timed */
  Timed = 3,
  /** Exec Started */
  ExecStarted = 4,
  /** All Done */
  AllDone = 5,
  /** Alert */
  Alert = 6,
}
