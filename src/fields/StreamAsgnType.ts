/**
 * The type of assignment being affected in the Stream Assignment Report.
 * tag: 1617
 * @readonly
 * @enum {number} (int)
 */
export enum StreamAsgnType {
  /** Assignment */
  Assignment = 1,
  /** Rejected */
  Rejected = 2,
  /** Terminate/Unassign */
  Terminate = 3,
}
