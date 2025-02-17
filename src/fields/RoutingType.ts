/**
 * Indicates the type of RoutingID (217) specified.
 * tag: 216
 * @readonly
 * @enum {number} (int)
 */
export enum RoutingType {
  /** Target Firm */
  TargetFirm = 1,
  /** Target List */
  TargetList = 2,
  /** Block Firm */
  BlockFirm = 3,
  /** Block List */
  BlockList = 4,
  /** Target Person */
  TargetPerson = 5,
  /** Block Person */
  BlockPerson = 6,
}
