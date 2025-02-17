/**
 * Identifies current status of order. *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features and Supported Approach" *** (see Volume : "Glossary" for value definitions)
 * tag: 39
 * @readonly
 * @enum {string} (char)
 */
export enum OrdStatus {
  /** New */
  New = '0',
  /** Partially filled */
  PartiallyFilled = '1',
  /** Filled */
  Filled = '2',
  /** Done for day */
  DoneForDay = '3',
  /** Canceled */
  Canceled = '4',
  /** Replaced (No longer used) */
  Replaced = '5',
  /** Pending Cancel (i.e. result of Order Cancel Request) */
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
  /** Accepted for Bidding */
  AcceptedForBidding = 'D',
  /** Pending Replace (i.e. result of Order Cancel/Replace Request) */
  PendingReplace = 'E',
}
