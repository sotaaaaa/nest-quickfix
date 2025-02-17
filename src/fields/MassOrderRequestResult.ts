/**
 * Request result of mass order request.
 * tag: 2426
 * @readonly
 * @enum {number} (int)
 */
export enum MassOrderRequestResult {
  /** Successful */
  Successful = 0,
  /** Response level not supported */
  ResponseLevelNotSupported = 1,
  /** Invalid market */
  InvalidMarket = 2,
  /** Invalid market segment */
  InvalidMarketSegment = 3,
  /** Other */
  Other = 99,
}
