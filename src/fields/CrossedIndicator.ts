/**
 * Indicates whether the order or quote was crossed with another order or quote having the same context, e.g. having accounts with a common ownership.
 * tag: 2523
 * @readonly
 * @enum {number} (int)
 */
export enum CrossedIndicator {
  NoCross = 0,
  CrossRejected = 1,
  CrossAccepted = 2,
}
