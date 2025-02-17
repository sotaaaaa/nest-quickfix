/**
 * Indicate the instruction for self-match prevention when the incoming (aggressive) order has the same SelfMatchPreventionID(2362) as a resting (passive) order.
 * tag: 2964
 * @readonly
 * @enum {number} (int)
 */
export enum SelfMatchPreventionInstruction {
  CancelAggressive = 1,
  CancelPassive = 2,
  CancelAggressivePassive = 3,
}
