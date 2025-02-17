/**
 * Indicates whether a message decrements the number of outstanding requests, e.g. one where ThrottleType = Outstanding Requests.
 * tag: 1686
 * @readonly
 * @enum {number} (int)
 */
export enum ThrottleCountIndicator {
  /** Outstanding requests unchanged */
  OutstandingRequestsUnchanged = 0,
  /** Outstanding requests decreased */
  OutstandingRequestsDecreased = 1,
}
