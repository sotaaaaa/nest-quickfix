/**
 * Defines the lot type assigned to the order.
 * tag: 1093
 * @readonly
 * @enum {string} (char)
 */
export enum LotType {
  /** Odd Lot */
  OddLot = '1',
  /** Round Lot */
  RoundLot = '2',
  /** Block Lot */
  BlockLot = '3',
  /** Round lot based upon UnitOfMeasure(996) */
  RoundLotBasedUpon = '4',
}
