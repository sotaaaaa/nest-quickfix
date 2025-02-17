/**
 * Result of Request for Positions.
 * tag: 728
 * @readonly
 * @enum {number} (int)
 */
export enum PosReqResult {
  /** Valid request */
  ValidRequest = 0,
  /** Invalid or unsupported request */
  InvalidOrUnsupportedRequest = 1,
  /** No positions found that match criteria */
  NoPositionsFoundThatMatchCriteria = 2,
  /** Not authorized to request positions */
  NotAuthorizedToRequestPositions = 3,
  /** Request for position not supported */
  RequestForPositionNotSupported = 4,
  Other = 99,
}
