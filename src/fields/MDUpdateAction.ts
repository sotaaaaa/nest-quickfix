/**
 * Type of Market Data update action.
 * tag: 279
 * @readonly
 * @enum {string} (char)
 */
export enum MDUpdateAction {
  /** New */
  New = '0',
  /** Change */
  Change = '1',
  /** Delete */
  Delete = '2',
  /** Delete Thru */
  DeleteThru = '3',
  /** Delete From */
  DeleteFrom = '4',
  /** Overlay */
  Overlay = '5',
}
