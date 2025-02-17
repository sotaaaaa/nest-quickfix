/**
 * Type of cross being submitted to a market
 * tag: 549
 * @readonly
 * @enum {number} (int)
 */
export enum CrossType {
  CrossAON = 1,
  CrossIOC = 2,
  CrossOneSide = 3,
  CrossSamePrice = 4,
  BasisCross = 5,
  ContingentCross = 6,
  VWAPCross = 7,
  STSCross = 8,
  CustomerToCustomer = 9,
}
