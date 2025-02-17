/**
 * Reason for Collateral Assignment
 * tag: 895
 * @readonly
 * @enum {number} (int)
 */
export enum CollAsgnReason {
  /** Initial */
  Initial = 0,
  /** Scheduled */
  Scheduled = 1,
  /** Time Warning */
  TimeWarning = 2,
  MarginDeficiency = 3,
  MarginExcess = 4,
  /** Forward Collateral Demand */
  ForwardCollateralDemand = 5,
  /** Event of default */
  EventOfDefault = 6,
  /** Adverse tax event */
  AdverseTaxEvent = 7,
  TransferDeposit = 8,
  TransferWithdrawal = 9,
  Pledge = 10,
}
