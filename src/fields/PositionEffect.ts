/**
 * Indicates whether the resulting position after a trade should be an opening position or closing position. Used for omnibus accounting - where accounts are held on a gross basis instead of being netted together.
 * tag: 77
 * @readonly
 * @enum {string} (char)
 */
export enum PositionEffect {
  /** Close */
  Close = 'C',
  /** FIFO */
  FIFO = 'F',
  /** Open */
  Open = 'O',
  /** Rolled */
  Rolled = 'R',
  /** Close but notify on open */
  CloseButNotifyOnOpen = 'N',
  /** Default */
  Default = 'D',
}
