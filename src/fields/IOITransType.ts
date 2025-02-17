/**
 * Identifies IOI message transaction type
 * tag: 28
 * @readonly
 * @enum {string} (char)
 */
export enum IOITransType {
  /** New */
  New = 'N',
  /** Cancel */
  Cancel = 'C',
  /** Replace */
  Replace = 'R',
}
