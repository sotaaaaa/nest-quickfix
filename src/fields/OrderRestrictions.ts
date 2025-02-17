/**
 * Restrictions associated with an order. If more than one restriction is applicable to an order, this field can contain multiple instructions separated by space.
 * tag: 529
 * @readonly
 * @enum {string} (MultipleCharValue)
 */
export enum OrderRestrictions {
  /** Program Trade */
  ProgramTrade = '1',
  /** Index Arbitrage */
  IndexArbitrage = '2',
  /** Non-Index Arbitrage */
  NonIndexArbitrage = '3',
  /** Competing Market Maker */
  CompetingMarketMaker = '4',
  /** Acting as Market Maker or Specialist in the security */
  ActingAsMarketMakerOrSpecialistInSecurity = '5',
  /** Acting as Market Maker or Specialist in the underlying security of a derivative security */
  ActingAsMarketMakerOrSpecialistInUnderlying = '6',
  /** Foreign Entity (of foreign government or regulatory jurisdiction) */
  ForeignEntity = '7',
  /** External Market Participant */
  ExternalMarketParticipant = '8',
  /** External Inter-connected Market Linkage */
  ExternalInterConnectedMarketLinkage = '9',
  /** Riskless Arbitrage */
  RisklessArbitrage = 'A',
  /** Issuer Holding */
  IssuerHolding = 'B',
  /** Issue Price Stabilization */
  IssuePriceStabilization = 'C',
  /** Non-algorithmic */
  NonAlgorithmic = 'D',
  /** Algorithmic */
  Algorithmic = 'E',
  /** Cross */
  Cross = 'F',
  /** Insider Account */
  InsiderAccount = 'G',
  /** Significant Shareholder */
  SignificantShareholder = 'H',
  /** Normal Course Issuer Bid (NCIB) */
  NormalCourseIssuerBid = 'I',
}
