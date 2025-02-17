/**
 * Specifies the action to be taken for the given order.
 * tag: 2429
 * @readonly
 * @enum {string} (char)
 */
export enum OrderEntryAction {
  /** Add */
  Add = '1',
  /** Modify */
  Modify = '2',
  /** Delete / Cancel */
  Delete = '3',
  /** Suspend */
  Suspend = '4',
  /** Release */
  Release = '5',
}
