/**
 * If the calculated peg price is not a valid tick price, specifies whether to round the price to be more or less aggressive
 * tag: 838
 * @readonly
 * @enum {number} (int)
 */
export enum PegRoundDirection {
  /** More aggressive - on a buy order round the price up to the nearest tick; on a sell order round down to the nearest tick */
  MoreAggressive = 1,
  /** More passive - on a buy order round down to the nearest tick; on a sell order round up to the nearest tick */
  MorePassive = 2,
}
