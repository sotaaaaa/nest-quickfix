export enum CustOrderCapacity {
  /** Member trading for their own account */
  MemberTradingForTheirOwnAccount = 1,
  /** Clearing firm trading for its proprietary account */
  ClearingFirmTradingForItsProprietaryAccount = 2,
  /** Member trading for another member */
  MemberTradingForAnotherMember = 3,
  /** All other */
  AllOther = 4,
  RetailCustomer = 5,
}
