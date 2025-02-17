/**
 * Designates the capacity in which the order is submitted for trading by the market participant.
 * tag: 1815
 * @readonly
 * @enum {number} (int)
 */
export enum TradingCapacity {
  /** Customer */
  Customer = 1,
  /** Customer professional */
  CustomerProfessional = 2,
  /** Broker-dealer */
  BrokerDealer = 3,
  /** Customer broker-dealer */
  CustomerBrokerDealer = 4,
  /** Principal */
  Principal = 5,
  /** Market maker */
  MarketMaker = 6,
  /** Away market maker */
  AwayMarketMaker = 7,
  /** Systematic internaliser */
  SystematicInternaliser = 8,
}
