/**
 * Indicates whether holidays are included in the settlement periods. Required for electricity contracts.
 * tag: 41050
 * @readonly
 * @enum {number} (int)
 */
export enum DeliveryScheduleSettlHolidaysProcessingInstruction {
  /** Do not include holidays */
  DoNotIncludeHolidays = 0,
  /** Include holidays */
  IncludeHolidays = 1,
}
