/**
 * Instruction to define conditions under which to release a locked order or parts of it.
 * tag: 1810
 * @readonly
 * @enum {number} (int)
 */
export enum ReleaseInstruction {
  /** Intermarket Sweep Order (ISO) */
  ISO = 1,
  /** No Away Market Better check */
  NoAwayMarketBetterCheck = 2,
}
