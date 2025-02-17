/**
 * Indicates the status of a network connection
 * tag: 928
 * @readonly
 * @enum {number} (int)
 */
export enum StatusValue {
  /** Connected */
  Connected = 1,
  /** Not Connected - down expected up */
  NotConnectedUnexpected = 2,
  /** Not Connected - down expected down */
  NotConnectedExpected = 3,
  /** In Process */
  InProcess = 4,
}
