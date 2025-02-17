/**
 * Indicates order settlement period for the underlying instrument.
 * tag: 975
 * @readonly
 * @enum {number} (int)
 */
export enum UnderlyingSettlementType {
  /** T+1 */
  TPlus1 = 2,
  /** T+3 */
  TPlus3 = 4,
  /** T+4 */
  TPlus4 = 5,
}
