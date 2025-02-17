/**
 * Used to indicate whether a delivery instruction is used for securities or cash settlement.
 * tag: 787
 * @readonly
 * @enum {string} (char)
 */
export enum DlvyInstType {
  /** Cash */
  Cash = 'C',
  /** Securities */
  Securities = 'S',
}
