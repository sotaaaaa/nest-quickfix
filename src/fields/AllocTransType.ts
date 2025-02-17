/**
 * Identifies allocation transaction type *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features and Supported Approach" ***
 * tag: 71
 * @readonly
 * @enum {string} (char)
 */
export enum AllocTransType {
  /** New */
  New = '0',
  /** Replace */
  Replace = '1',
  /** Cancel */
  Cancel = '2',
  /** Preliminary (without MiscFees and NetMoney) (Removed/Replaced) */
  Preliminary = '3',
  /** Calculated (includes MiscFees and NetMoney) (Removed/Replaced) */
  Calculated = '4',
  /** Calculated without Preliminary (sent unsolicited by broker, includes MiscFees and NetMoney) (Removed/Replaced) */
  CalculatedWithoutPreliminary = '5',
  /** Reversal */
  Reversal = '6',
}
