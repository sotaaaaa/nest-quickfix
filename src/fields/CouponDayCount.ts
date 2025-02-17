/**
 * The day count convention used in interest calculations for a bond or an interest bearing security. Absence of this field for a bond or an interest bearing security transaction implies a "flat" trade, i.e. no accrued interest determined at time of the transaction.
 * tag: 1950
 * @readonly
 * @enum {number} (int)
 */
export enum CouponDayCount {
  OneOne = 0,
  ThirtyThreeSixtyUS = 1,
  ThirtyThreeSixtySIA = 2,
  ThirtyThreeSixtyM = 3,
  ThirtyEThreeSixty = 4,
  ThirtyEThreeSixtyISDA = 5,
  ActThreeSixty = 6,
  ActThreeSixtyFiveFixed = 7,
  ActActAFB = 8,
  ActActICMA = 9,
  ActActISMAUltimo = 10,
  ActActISDA = 11,
  BusTwoFiftyTwo = 12,
  ThirtyEPlusThreeSixty = 13,
  ActThreeSixtyFiveL = 14,
  NLThreeSixtyFive = 15,
  NLThreeSixty = 16,
  Act364 = 17,
  ThirtyThreeSixtyFive = 18,
  ThirtyActual = 19,
  ThirtyThreeSixtyICMA = 20,
  ThirtyETwoThreeSixty = 21,
  ThirtyEThreeThreeSixty = 22,
  Other = 99,
}
