/**
 * Identifies Registration Instructions transaction type
 * tag: 514
 * @readonly
 * @enum {string} (char)
 */
export enum RegistTransType {
  /** New */
  New = '0',
  /** Cancel */
  Cancel = '2',
  /** Replace */
  Replace = '1',
}
