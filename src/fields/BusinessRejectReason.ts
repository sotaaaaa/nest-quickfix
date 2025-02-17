/**
 * Code to identify reason for a Business Message Reject message.
 * tag: 380
 * @readonly
 * @enum {number} (int)
 */
export enum BusinessRejectReason {
  /** Other */
  Other = 0,
  /** Unknown ID */
  UnknownID = 1,
  /** Unknown Security */
  UnknownSecurity = 2,
  /** Unsupported Message Type */
  UnsupportedMessageType = 3,
  /** Application not available */
  ApplicationNotAvailable = 4,
  /** Conditionally required field missing */
  ConditionallyRequiredFieldMissing = 5,
  /** Not Authorized */
  NotAuthorized = 6,
  /** DeliverTo firm not available at this time */
  DeliverToFirmNotAvailableAtThisTime = 7,
  /** Throttle limit exceeded */
  ThrottleLimitExceeded = 8,
  /** Throttle limit exceeded, session will be disconnected */
  ThrottleLimitExceededSessionDisconnected = 9,
  /** Throttled messages rejected on request */
  ThrottledMessagesRejectedOnRequest = 10,
  /** Invalid price increment */
  InvalidPriceIncrement = 18,
}
