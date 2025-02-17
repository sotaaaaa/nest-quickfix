/**
 * Result of the credit limit check request.
 * tag: 2326
 * @readonly
 * @enum {number} (int)
 */
export enum RiskLimitCheckRequestResult {
  /** Successful (default) */
  Successful = 0,
  /** Invalid party */
  InvalidParty = 1,
  /** Requested amount exceeds credit limit */
  ReqExceedsCreditLimit = 2,
  /** Requested amount exceeds clip size limit */
  ReqExceedsClipSizeLimit = 3,
  /** Request exceeds maximum notional order amount */
  ReqExceedsMaxNotional = 4,
  /** Other */
  Other = 99,
}
