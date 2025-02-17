/**
 * Settlement Instructions message transaction type
 * tag: 163
 * @readonly
 * @enum {string} (char)
 */
export enum SettlInstTransType {
  /** New */
  New = 'N',
  /** Cancel */
  Cancel = 'C',
  /** Replace */
  Replace = 'R',
  /** Restate */
  Restate = 'T',
}
