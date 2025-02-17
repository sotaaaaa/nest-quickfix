/**
 * An indicator to override the normal procedure to roll up allocations for the same take-up firm.
 * tag: 1735
 * @readonly
 * @enum {number} (int)
 */
export enum AllocationRollupInstruction {
  /** Roll up */
  Rollup = 0,
  /** Do not roll up */
  DoNotRollUp = 1,
}
