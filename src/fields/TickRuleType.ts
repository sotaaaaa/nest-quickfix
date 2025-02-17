/**
 * Specifies the type of tick rule which is being described
 * tag: 1209
 * @readonly
 * @enum {number} (int)
 */
export enum TickRuleType {
  /** Regular trading */
  RegularTrading = 0,
  /** Variable cabinet */
  VariableCabinet = 1,
  /** Fixed cabinet */
  FixedCabinet = 2,
  /** Traded as a spread leg */
  TradedAsASpreadLeg = 3,
  /** Settled as a spread leg */
  SettledAsASpreadLeg = 4,
  TradedAsSpread = 5,
}
