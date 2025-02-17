/**
 * Type of provisions.
 * tag: 40091
 * @readonly
 * @enum {number} (int)
 */
export enum ProvisionType {
  /** Mandatory early termination */
  MandatoryEarlyTermination = 0,
  /** Optional early termination */
  OptionalEarlyTermination = 1,
  /** Cancelable */
  Cancelable = 2,
  Extendable = 3,
  /** Mutual early termination */
  MutualEarlyTermination = 4,
  Evergreen = 5,
  Callable = 6,
  Puttable = 7,
}
