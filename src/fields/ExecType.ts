/**
 * Describes the specific ExecutionRpt (e.g. Pending Cancel) while OrdStatus(39) will always identify the current order status (e.g. Partially Filled).
 * tag: 150
 * @readonly
 * @enum {string} (char)
 */
export enum ExecType {
  /** New */
  New = '0',
  /** Done for day */
  DoneForDay = '3',
  /** Canceled */
  Canceled = '4',
  /** Replaced */
  Replaced = '5',
  /** Pending Cancel (e.g. result of Order Cancel Request) */
  PendingCancel = '6',
  /** Stopped */
  Stopped = '7',
  /** Rejected */
  Rejected = '8',
  /** Suspended */
  Suspended = '9',
  /** Pending New */
  PendingNew = 'A',
  /** Calculated */
  Calculated = 'B',
  /** Expired */
  Expired = 'C',
  /** Restated (Execution Report sent unsolicited by sellside, with ExecRestatementReason (378) set) */
  Restated = 'D',
  /** Pending Replace (e.g. result of Order Cancel/Replace Request) */
  PendingReplace = 'E',
  /** Trade (partial fill or fill) */
  Trade = 'F',
  /** Trade Correct */
  TradeCorrect = 'G',
  /** Trade Cancel */
  TradeCancel = 'H',
  /** Order Status */
  OrderStatus = 'I',
  /** Trade in a Clearing Hold */
  TradeInAClearingHold = 'J',
  /** Trade has been released to Clearing */
  TradeHasBeenReleasedToClearing = 'K',
  /** Triggered or Activated by System */
  TriggeredOrActivatedBySystem = 'L',
  /** Locked */
  Locked = 'M',
  /** Released */
  Released = 'N',
}
