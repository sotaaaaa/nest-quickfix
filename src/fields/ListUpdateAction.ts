/**
 * If provided, then Instrument occurrence has explicitly changed
 * tag: 1324
 * @readonly
 * @enum {string} (char)
 */
export enum ListUpdateAction {
  /** Add */
  Add = 'A',
  /** Delete */
  Delete = 'D',
  /** Modify */
  Modify = 'M',
  /** Snapshot */
  Snapshot = 'S',
}
