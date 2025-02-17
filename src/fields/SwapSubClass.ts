/**
 * The sub-classification or notional schedule type of the swap.
 * tag: 1575
 * @readonly
 * @enum {string} (String)
 */
export enum SwapSubClass {
  /** Amortizing notional schedule */
  Amortizing = 'AMTZ',
  /** Compounding */
  Compounding = 'COMP',
  /** Constant notional schedule */
  ConstantNotionalSchedule = 'CNST',
  /** Accreting notional schedule */
  AccretingNotionalSchedule = 'ACRT',
  /** Custom notional schedule */
  CustomNotionalSchedule = 'CUST',
}
