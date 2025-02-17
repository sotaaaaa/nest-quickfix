/**
 * Instructs when to refresh DisplayQty (1138).
 * tag: 1083
 * @readonly
 * @enum {string} (char)
 */
export enum DisplayWhen {
  /** Immediate (after each fill) */
  Immediate = '1',
  /** Exhaust (when DisplayQty = 0) */
  Exhaust = '2',
}
