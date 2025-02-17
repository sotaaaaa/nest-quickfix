/**
 * Type of account associated with an order
 * tag: 581
 * @readonly
 * @enum {number} (int)
 */
export enum AccountType {
  /** Account is carried on customer side of the books */
  CarriedCustomerSide = 1,
  /** Account is carried on non-customer side of books */
  CarriedNonCustomerSide = 2,
  /** House Trader */
  HouseTrader = 3,
  /** Floor Trader */
  FloorTrader = 4,
  /** Account is carried on non-customer side of books and is cross margined */
  CarriedNonCustomerSideCrossMargined = 6,
  /** Account is house trader and is cross margined */
  HouseTraderCrossMargined = 7,
  /** Joint back office account (JBO) */
  JointBackOfficeAccount = 8,
  /** Equities specialist */
  EquitiesSpecialist = 9,
  /** Options market maker */
  OptionsMarketMaker = 10,
  /** Options firm account */
  OptionsFirmAccount = 11,
  AccountCustomerNonCustomerOrders = 12,
  AccountOrdersMultipleCustomers = 13,
}
