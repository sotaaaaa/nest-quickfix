/**
 * Specifies how long the order remains in effect. Absence of this field is interpreted as DAY. NOTE not applicable to CIV Orders.
 * tag: 59
 * @readonly
 * @enum {string} (char)
 */
export enum TimeInForce {
  Day = '0',
  GoodTillCancel = '1',
  AtTheOpening = '2',
  ImmediateOrCancel = '3',
  FillOrKill = '4',
  GoodTillCrossing = '5',
  GoodTillDate = '6',
  AtTheClose = '7',
  GoodThroughCrossing = '8',
  AtCrossing = '9',
  GoodForTime = 'A',
  GoodForAuction = 'B',
  GoodForMonth = 'C',
}
