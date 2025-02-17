/**
 * Status of a FIX session
 * tag: 1409
 * @readonly
 * @enum {number} (int)
 */
export enum SessionStatus {
  /** Session active */
  SessionActive = 0,
  /** Session password changed */
  SessionPasswordChanged = 1,
  /** Session password due to expire */
  SessionPasswordDueToExpire = 2,
  /** New session password does not comply with policy */
  NewSessionPasswordDoesNotComplyWithPolicy = 3,
  /** Session logout complete */
  SessionLogoutComplete = 4,
  /** Invalid username or password */
  InvalidUsernameOrPassword = 5,
  /** Account locked */
  AccountLocked = 6,
  /** Logons are not allowed at this time */
  LogonsAreNotAllowedAtThisTime = 7,
  /** Password expired */
  PasswordExpired = 8,
  /** Received MsgSeqNum(34) is too low. */
  ReceivedMsgSeqNumTooLow = 9,
  /** Received NextExpectedMsgSeqNum(789) is too high. */
  ReceivedNextExpectedMsgSeqNumTooHigh = 10,
}
