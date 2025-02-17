/**
 * Specifies the commodity delivery flow type.
 * tag: 41049
 * @readonly
 * @enum {number} (int)
 */
export enum DeliveryScheduleSettlFlowType {
  /** All times */
  AllTimes = 0,
  /** On peak */
  OnPeak = 1,
  /** Off peak */
  OffPeak = 2,
  /** Base */
  Base = 3,
  /** Block hours */
  BlockHours = 4,
  /** Other */
  Other = 5,
}
