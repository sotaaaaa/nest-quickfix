/**
 * For CIV - A one character code identifying whether Cancellation rights/Cooling off period applies.
 * tag: 480
 * @readonly
 * @enum {string} (char)
 */
export enum CancellationRights {
  /** Yes */
  Yes = 'Y',
  /** No - Execution Only */
  NoExecutionOnly = 'N',
  /** No - Waiver agreement */
  NoWaiverAgreement = 'M',
  /** No - Institutional */
  NoInstitutional = 'O',
}
