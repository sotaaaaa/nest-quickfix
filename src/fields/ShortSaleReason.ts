/**
 * Reason for short sale.
 * tag: 853
 * @readonly
 * @enum {number} (int)
 */
export enum ShortSaleReason {
  /** Dealer Sold Short */
  DealerSoldShort = 0,
  /** Dealer Sold Short Exempt */
  DealerSoldShortExempt = 1,
  /** Selling Customer Sold Short */
  SellingCustomerSoldShort = 2,
  /** Selling Customer Sold Short Exempt */
  SellingCustomerSoldShortExempt = 3,
  /** Qualified Service Representative (QSR) or Automatic Give-up (AGU) Contra Side Sold Short */
  QualifiedServiceRepresentative = 4,
  /** QSR or AGU Contra Side Sold Short Exempt */
  QSROrAGUContraSideSoldShortExempt = 5,
}
