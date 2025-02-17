/**
 * The side from which the trigger price is reached.
 * tag: 1109
 * @readonly
 * @enum {string} (char)
 */
export enum TriggerPriceDirection {
  /** Trigger if the price of the specified type goes UP to or through the specified Trigger Price. */
  Up = 'U',
  /** Trigger if the price of the specified type goes DOWN to or through the specified Trigger Price. */
  Down = 'D',
}
