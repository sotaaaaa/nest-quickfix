/**
 * Result of a request as identified by the appropriate request ID field
 * tag: 1511
 * @readonly
 * @enum {number} (int)
 */
export enum RequestResult {
  /** Valid request */
  ValidRequest = 0,
  /** Invalid or unsupported request */
  InvalidOrUnsupportedRequest = 1,
  /** No data found that match selection criteria */
  NoDataFound = 2,
  /** Not authorized to retrieve data */
  NotAuthorized = 3,
  /** Data temporarily unavailable */
  DataTemporarilyUnavailable = 4,
  /** Request for data not supported */
  RequestForDataNotSupported = 5,
  /** Other (further information in RejectText (1328) field) */
  Other = 99,
}
