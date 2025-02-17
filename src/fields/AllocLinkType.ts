/**
 * Identifies the type of Allocation linkage when AllocLinkID(196) is used.
 * tag: 197
 * @readonly
 * @enum {number} (int)
 */
export enum AllocLinkType {
  /** FX Netting */
  FXNetting = 0,
  /** FX Swap */
  FXSwap = 1,
}
