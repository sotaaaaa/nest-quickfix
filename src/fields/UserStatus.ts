/**
 * Indicates the status of a user
 * tag: 926
 * @readonly
 * @enum {number} (int)
 */
export enum UserStatus {
  /** Logged In */
  LoggedIn = 1,
  /** Not Logged In */
  NotLoggedIn = 2,
  /** User Not Recognised */
  UserNotRecognised = 3,
  /** Password Incorrect */
  PasswordIncorrect = 4,
  /** Password Changed */
  PasswordChanged = 5,
  /** Other */
  Other = 6,
  /** Forced user logout by Exchange */
  ForcedUserLogoutByExchange = 7,
  /** Session shutdown warning */
  SessionShutdownWarning = 8,
  /** Throttle parameters changed */
  ThrottleParametersChanged = 9,
}
