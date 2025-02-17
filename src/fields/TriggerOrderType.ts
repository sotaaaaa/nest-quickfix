/**
 * The OrdType the order should have after the trigger has hit. Required to express orders that change from Limit to Market. Other values from OrdType (40) may be used if appropriate and bilaterally agreed upon.
 * tag: 1111
 * @readonly
 * @enum {string} (char)
 */
export enum TriggerOrderType {
  /** Market */
  Market = '1',
  /** Limit */
  Limit = '2',
}
