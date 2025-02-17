/**
 * Defines when the trigger will hit, i.e. the action specified by the trigger instructions will come into effect.
 * tag: 1100
 * @readonly
 * @enum {string} (char)
 */
export enum TriggerType {
  /** Partial Execution */
  PartialExecution = '1',
  /** Specified Trading Session */
  SpecifiedTradingSession = '2',
  /** Next Auction */
  NextAuction = '3',
  /** Price Movement */
  PriceMovement = '4',
  /** On Order Entry or order modification entry */
  OnOrderEntryOrModification = '5',
}
