/**
 * Type of account associated with a confirmation or other trade-level message
 * tag: 798
 * @readonly
 * @enum {number} (int)
 */
export enum AllocAccountType {
  /** Account is carried pn customer side of books */
  CarriedCustomerSide = 1,
  /** Account is carried on non-customer side of books */
  CarriedNonCustomerSide = 2,
  /** House trader */
  HouseTrader = 3,
  /** Floor trader */
  FloorTrader = 4,
  /** Account is carried on non-customer side of books and is cross margined */
  CarriedNonCustomerSideCrossMargined = 6,
  /** Account is house trader and is cross margined */
  HouseTraderCrossMargined = 7,
  /** Joint back office account (JBO) */
  JointBackOfficeAccount = 8,
}
