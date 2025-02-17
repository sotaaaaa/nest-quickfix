/**
 * Identifies the overall test result of a group of individual test scenarios.
 * tag: 3070
 * @readonly
 * @enum {number} (int)
 */
export enum TestSuiteStatus {
  /** Undefined */
  Undefined = 0,
  /** Pass */
  Pass = 1,
  /** Fail */
  Fail = 2,
  /** Warning */
  Warning = 3,
}
