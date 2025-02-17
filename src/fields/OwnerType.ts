/**
 * Identifies the type of owner.
 * tag: 522
 * @readonly
 * @enum {number} (int)
 */
export enum OwnerType {
  /** Individual investor */
  IndividualInvestor = 1,
  /** Public company */
  PublicCompany = 2,
  /** Private company */
  PrivateCompany = 3,
  /** Individual trustee */
  IndividualTrustee = 4,
  /** Company trustee */
  CompanyTrustee = 5,
  /** Pension plan */
  PensionPlan = 6,
  /** Custodian under Gifts to Minors Act */
  CustodianUnderGiftsToMinorsAct = 7,
  /** Trusts */
  Trusts = 8,
  /** Fiduciaries */
  Fiduciaries = 9,
  /** Networking sub-account */
  NetworkingSubAccount = 10,
  /** Non-profit organization */
  NonProfitOrganization = 11,
  /** Corporate body */
  CorporateBody = 12,
  /** Nominee */
  Nominee = 13,
  /** Institutional customer */
  InstitutionalCustomer = 14,
  Combined = 15,
  /** Member firm employee or associated person */
  MemberFirmEmployee = 16,
  /** Market making account */
  MarketMakingAccount = 17,
  /** Proprietary account */
  ProprietaryAccount = 18,
  /** Non-broker-dealer */
  NonbrokerDealer = 19,
  UnknownBeneficialOwnerType = 20,
  /** Error account of firm */
  FirmsErrorAccount = 21,
  /** Firm agency average price account */
  FirmAgencyAveragePriceAccount = 22,
}
