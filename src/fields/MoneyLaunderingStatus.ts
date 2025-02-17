/**
 * A one character code identifying Money laundering status.
 * tag: 481
 * @readonly
 * @enum {string} (char)
 */
export enum MoneyLaunderingStatus {
  /** Passed */
  Passed = 'Y',
  /** Not Checked */
  NotChecked = 'N',
  /** Exempt - Below the Limit */
  ExemptBelowLimit = '1',
  /** Exempt - Client Money Type exemption */
  ExemptMoneyType = '2',
  /** Exempt - Authorised Credit or financial institution */
  ExemptAuthorised = '3',
}
