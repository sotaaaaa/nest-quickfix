/**
 * Transaction Type - required except where SettlInstMode is 5=Reject SSI request
 * tag: 1162
 * @readonly
 * @enum {string} (char)
 */
export enum SettlObligTransType {
  /** Cancel */
  Cancel = 'C',
  /** New */
  New = 'N',
  /** Replace */
  Replace = 'R',
  /** Restate */
  Restate = 'T',
}
