/**
 * Identifies whether the allocation is to be sub-allocated or allocated to a third party
 * tag: 992
 * @readonly
 * @enum {number} (int)
 */
export enum IndividualAllocType {
  /** Sub Allocate */
  SubAllocate = 1,
  /** Third Party Allocation */
  ThirdPartyAllocation = 2,
}
