/**
 * Identifies the type of position transaction.
 * tag: 709
 * @readonly
 * @enum {number} (int)
 */
export enum PosTransType {
  /** Exercise */
  Exercise = 1,
  /** Do not exercise */
  DoNotExercise = 2,
  /** Position adjustment */
  PositionAdjustment = 3,
  /** Position change submission / margin disposition */
  PositionChangeSubmission = 4,
  /** Pledge */
  Pledge = 5,
  /** Large trader submission */
  LargeTraderSubmission = 6,
  /** Large positions reporting submission */
  LargePositionsReportingSubmission = 7,
  /** Long holdings */
  LongHoldings = 8,
  InternalTransfer = 9,
  TransferOfFirm = 10,
  ExternalTransfer = 11,
  /** Corporate action */
  CorporateAction = 12,
  Notification = 13,
  PositionCreation = 14,
  Closeout = 15,
  Reopen = 16,
}
