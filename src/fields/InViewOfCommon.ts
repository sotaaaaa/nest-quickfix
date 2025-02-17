/**
 * Indicates whether or not the halt was due to Common Stock trading being halted.
 * tag: 328
 * @readonly
 * @enum {string} (Boolean)
 */
export enum InViewOfCommon {
  /** Halt was not related to a halt of the common stock */
  HaltWasNotRelatedToAHaltOfTheCommonStock = 'N',
  /** Halt was due to common stock being halted */
  HaltWasDueToCommonStockBeingHalted = 'Y',
}
