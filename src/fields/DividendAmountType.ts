/**
 * Indicates how the gross cash dividend amount per share is determined.
 * tag: 42247
 * @readonly
 * @enum {number} (int)
 */
export enum DividendAmountType {
  RecordAmount = 0,
  ExAmount = 1,
  PaidAmount = 2,
  PerMasterConfirm = 3,
}
