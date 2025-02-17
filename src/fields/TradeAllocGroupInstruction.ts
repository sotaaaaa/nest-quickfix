/**
 * Instruction on how to add a trade to an allocation group when it is being given-up.
 * tag: 1848
 * @readonly
 * @enum {number} (int)
 */
export enum TradeAllocGroupInstruction {
  /** Add to an existing allocation group if one exists. */
  Add = 0,
  /** Do not add the trade to an allocation group. */
  DoNotAdd = 1,
}
