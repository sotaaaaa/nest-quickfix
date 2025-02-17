/**
 * Used to return an error code or text associated with a response to an Application Request.
 * tag: 1354
 * @readonly
 * @enum {number} (int)
 */
export enum ApplResponseError {
  /** Application does not exist */
  ApplicationDoesNotExist = 0,
  /** Messages requested are not available */
  MessagesRequestedAreNotAvailable = 1,
  /** User not authorized for application */
  UserNotAuthorizedForApplication = 2,
}
