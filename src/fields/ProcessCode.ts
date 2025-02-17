/**
 * Processing code for sub-account. Absence of this field in AllocAccount (79) / AllocPrice (366) /AllocQty (80) / ProcessCode instance indicates regular trade.
 * tag: 81
 * @readonly
 * @enum {string} (char)
 */
export enum ProcessCode {
  /** Regular */
  Regular = '0',
  /** Soft Dollar */
  SoftDollar = '1',
  /** Step-In */
  StepIn = '2',
  /** Step-Out */
  StepOut = '3',
  /** Soft-dollar Step-In */
  SoftDollarStepIn = '4',
  /** Soft-dollar Step-Out */
  SoftDollarStepOut = '5',
  /** Plan Sponsor */
  PlanSponsor = '6',
}
