/**
 * Indicates if a Cancel/Replace has caused an order to lose book priority.
 * tag: 638
 * @readonly
 * @enum {number} (int)
 */
export enum PriorityIndicator {
  /** Priority unchanged */
  PriorityUnchanged = 0,
  /** Lost Priority as result of order change */
  LostPriorityAsResultOfOrderChange = 1,
}
