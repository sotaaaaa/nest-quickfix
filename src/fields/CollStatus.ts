/**
 * Collateral Status
 * tag: 910
 * @readonly
 * @enum {number} (int)
 */
export enum CollStatus {
  /** Unassigned */
  Unassigned = 0,
  /** Partially Assigned */
  PartiallyAssigned = 1,
  /** Assignment Proposed */
  AssignmentProposed = 2,
  /** Assigned (Accepted) */
  Assigned = 3,
  /** Challenged */
  Challenged = 4,
  Reused = 5,
}
