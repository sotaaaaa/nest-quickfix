/**
 * Indicates the action required by a User Request Message
 * tag: 924
 * @readonly
 * @enum {number} (int)
 */
export enum UserRequestType {
  /** Log On User */
  LogOnUser = 1,
  /** Log Off User */
  LogOffUser = 2,
  /** Change Password For User */
  ChangePasswordForUser = 3,
  /** Request Individual User Status */
  RequestIndividualUserStatus = 4,
  /** Request Throttle Limit */
  RequestThrottleLimit = 5,
}
