/**
 * Specifies which type of identifier is specified in RefRiskLimitCheckID(2334) field.
 * tag: 2335
 * @readonly
 * @enum {number} (int)
 */
export enum RefRiskLimitCheckIDType {
  /** RiskLimitRequestID(1666) */
  RiskLimitRequestID = 0,
  /** RiskLimitCheckID(2319) */
  RiskLimitCheckID = 1,
  /** Out of band identifier */
  OutOfBandID = 3,
}
