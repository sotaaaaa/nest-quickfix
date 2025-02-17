/**
 * If the calculated discretionary price is not a valid tick price, specifies whether to round the price to be more or less aggressive
 * tag: 844
 * @readonly
 * @enum {number} (int)
 */
export enum DiscretionRoundDirection {
  /** More aggressive - on a buy order round the price up to the nearest tick; on a sell round down to the nearest tick */
  MoreAggressive = 1,
  /** More passive - on a buy order round down to the nearest tick; on a sell order round up to the nearest tick */
  MorePassive = 2,
}
