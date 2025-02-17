/**
 * Status of the TestSuiteDefinitionRequest(35=EL) message being responded to.
 * tag: 3065
 * @readonly
 * @enum {number} (int)
 */
export enum TestSuiteRequestStatus {
  /** Received, not yet processed */
  Received = 0,
  /** Accepted */
  Accepted = 1,
  Rejected = 2,
}
