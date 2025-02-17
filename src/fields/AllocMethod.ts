/**
 * Specifies the method under which a trade quantity was allocated.
 * tag: 1002
 * @readonly
 * @enum {number} (int)
 */
export enum AllocMethod {
  /** Automatic */
  Automatic = 1,
  /** Guarantor */
  Guarantor = 2,
  /** Manual */
  Manual = 3,
  /** Broker assigned */
  BrokerAssigned = 4,
}
