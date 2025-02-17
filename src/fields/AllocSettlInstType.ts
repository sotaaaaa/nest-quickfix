/**
 * Used to indicate whether settlement instructions are provided on an allocation instruction message, and if not, how they are to be derived.
 * tag: 780
 * @readonly
 * @enum {number} (int)
 */
export enum AllocSettlInstType {
  /** Use default instructions */
  UseDefaultInstructions = 0,
  /** Derive from parameters provided */
  DeriveFromParametersProvided = 1,
  /** Full details provided */
  FullDetailsProvided = 2,
  /** SSI DB IDs provided */
  SSIDBIDsProvided = 3,
  /** Phone for instructions */
  PhoneForInstructions = 4,
}
