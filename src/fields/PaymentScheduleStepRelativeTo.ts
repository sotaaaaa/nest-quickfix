/**
 * Specifies whether the PaymentScheduleStepRate(40847) or PaymentScheduleStepOffsetValue(40846) should be applied to the initial notional or the previous notional in order to calculate the notional step change amount.
 * tag: 40849
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentScheduleStepRelativeTo {
  /** Initial */
  Initial = 0,
  /** Previous */
  Previous = 1,
}
