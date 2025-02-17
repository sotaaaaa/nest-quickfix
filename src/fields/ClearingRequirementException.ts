/**
 * Specifies whether a party to a swap is using an exception to a clearing requirement. In the US, one such clearing requirement is CFTC's rule pursuant to CEA Section 2(h)(1).
 * tag: 1932
 * @readonly
 * @enum {number} (int)
 */
export enum ClearingRequirementException {
  /** No exception */
  NoException = 0,
  Exception = 1,
  EndUserException = 2,
  InterAffiliateException = 3,
  TreasuryAffiliateException = 4,
  CooperativeException = 5,
}
