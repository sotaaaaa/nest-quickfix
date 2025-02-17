/**
 * Type of schedule.
 * tag: 40829
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentScheduleType {
  /** Notional */
  Notional = 0,
  /** Cash flow */
  CashFlow = 1,
  /** FX linked notional */
  FXLinkedNotional = 2,
  /** Fixed rate */
  FixedRate = 3,
  /** Future value notional */
  FutureValueNotional = 4,
  /** Known amount */
  KnownAmount = 5,
  /** Floating rate multiplier */
  FloatingRateMultiplier = 6,
  /** Spread */
  Spread = 7,
  /** Cap rate */
  CapRate = 8,
  /** Floor rate */
  FloorRate = 9,
  /** Non-deliverable settlement payment dates */
  NonDeliverableSettlPaymentDates = 10,
  /** Non-deliverable settlement calculation dates */
  NonDeliverableSettlCalculationDates = 11,
  /** Non-deliverable fixing dates. */
  NonDeliverableFXFixingDates = 12,
  /** Settlement period notional */
  SettlPeriodNotnl = 13,
  /** Settlement period price */
  SettlPeriodPx = 14,
  /** Calculation period */
  CalcPeriod = 15,
  /** Dividend accrual rate multiplier */
  DividendAccrualRateMultiplier = 16,
  /** Dividend accrual rate spread */
  DividendAccrualRateSpread = 17,
  /** Dividend accrual cap rate */
  DividendAccrualCapRate = 18,
  /** Dividend accrual floor rate */
  DividendAccrualFloorRate = 19,
  /** Compounding rate multiplier */
  CompoundingRateMultiplier = 20,
  /** Compounding rate spread */
  CompoundingRateSpread = 21,
  /** Compounding cap rate */
  CompoundingCapRate = 22,
  /** Compounding floor rate */
  CompoundingFloorRate = 23,
}
