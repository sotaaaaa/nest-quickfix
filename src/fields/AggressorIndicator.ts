/**
 * Used to identify whether the order initiator is an aggressor or not in the trade.
 * tag: 1057
 * @readonly
 * @enum {string} (Boolean)
 */
export enum AggressorIndicator {
  /** Order initiator is aggressor */
  OrderInitiatorIsAggressor = 'Y',
  /** Order initiator is passive */
  OrderInitiatorIsPassive = 'N',
}
