/**
 * Defines what value to use in DisplayQty (1138). If not specified the default DisplayMethod is "1"
 * tag: 1084
 * @readonly
 * @enum {string} (char)
 */
export enum DisplayMethod {
  /** Initial (use original DisplayQty) */
  Initial = '1',
  /** New (use RefreshQty) */
  New = '2',
  /** Random (randomize value) */
  Random = '3',
  /** Undisclosed (invisible order) */
  Undisclosed = '4',
}
