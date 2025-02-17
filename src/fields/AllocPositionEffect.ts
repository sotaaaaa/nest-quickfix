/**
 * Indicates whether the resulting position after a trade should be an opening position or closing position. Used for omnibus accounting - where accounts are held on a gross basis instead of being netted together.
 * tag: 1047
 * @readonly
 * @enum {string} (char)
 */
export enum AllocPositionEffect {
  /** Open */
  Open = 'O',
  /** Close */
  Close = 'C',
  /** Rolled */
  Rolled = 'R',
  /** FIFO */
  FIFO = 'F',
}
