/**
 * Used to specify the type of the party relationship.
 * tag: 1515
 * @readonly
 * @enum {number} (int)
 */
export enum PartyRelationship {
  /** Is also */
  IsAlso = 0,
  /** Clears for */
  ClearsFor = 1,
  /** Clears through */
  ClearsThrough = 2,
  /** Trades for */
  TradesFor = 3,
  /** Trades through */
  TradesThrough = 4,
  /** Sponsors */
  Sponsors = 5,
  /** Sponsored through */
  SponsoredThrough = 6,
  /** Provides guarantee for */
  ProvidesGuaranteeFor = 7,
  /** Is guaranteed by */
  IsGuaranteedBy = 8,
  /** Member of */
  MemberOf = 9,
  /** Has members */
  HasMembers = 10,
  /** Provides marketplace for */
  ProvidesMarketplaceFor = 11,
  /** Participant of marketplace */
  ParticipantOfMarketplace = 12,
  /** Carries positions for */
  CarriesPositionsFor = 13,
  /** Posts trades to */
  PostsTradesTo = 14,
  /** Enters trades for */
  EntersTradesFor = 15,
  /** Enters trades through */
  EntersTradesThrough = 16,
  /** Provides quotes to */
  ProvidesQuotesTo = 17,
  /** Requests quotes from */
  RequestsQuotesFrom = 18,
  /** Invests for */
  InvestsFor = 19,
  /** Invests through */
  InvestsThrough = 20,
  /** Brokers trades for */
  BrokersTradesFor = 21,
  /** Brokers trades through */
  BrokersTradesThrough = 22,
  /** Provides trading services for */
  ProvidesTradingServicesFor = 23,
  /** Uses trading services of */
  UsesTradingServicesOf = 24,
  /** Approves of */
  ApprovesOf = 25,
  /** Approved by */
  ApprovedBy = 26,
  /** Parent firm for */
  ParentFirmFor = 27,
  /** Subsidiary of */
  SubsidiaryOf = 28,
  /** Regulatory owner of */
  RegulatoryOwnerOf = 29,
  /** Owned by (regulatory) */
  OwnedByRegulatory = 30,
  /** Controls */
  Controls = 31,
  /** Is controlled by */
  IsControlledBy = 32,
  /** Legal / titled owner of */
  LegalOwnerOf = 33,
  /** Owned by (legal / title) */
  OwnedByLegal = 34,
  /** Beneficial owner of */
  BeneficialOwnerOf = 35,
  /** Owned by (beneficial) */
  OwnedByBeneficial = 36,
  /** Settles for */
  SettlesFor = 37,
  /** Settles through */
  SettlesThrough = 38,
}
