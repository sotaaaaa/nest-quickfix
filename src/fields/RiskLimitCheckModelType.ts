/**
 * Specifies the type of credit limit check model workflow to apply for the specified party
 * tag: 2339
 * @readonly
 * @enum {number} (int)
 */
export enum RiskLimitCheckModelType {
  None = 0,
  PlusOneModel = 1,
  PingModel = 2,
  PushModel = 3,
}
