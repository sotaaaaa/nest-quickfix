/**
 * Identifies reason for rejection.
 * tag: 88
 * @readonly
 * @enum {number} (int)
 */
export enum AllocRejCode {
  /** Unknown or missing account(s) */
  UnknownAccount = 0,
  /** Incorrect or missing block quantity */
  IncorrectQuantity = 1,
  /** Incorrect or missing average price */
  IncorrectAveragePrice = 2,
  /** Unknown executing broker mnemonic */
  UnknownExecutingBrokerMnemonic = 3,
  /** Incorrect or missing commission */
  CommissionDifference = 4,
  /** Unknown OrderID(37) */
  UnknownOrderID = 5,
  /** Unknown ListID(66) */
  UnknownListID = 6,
  /** Other (further in Text (58)) */
  OtherSeeText = 7,
  /** Incorrect or missing allocated quantity */
  IncorrectAllocatedQuantity = 8,
  /** Calculation difference */
  CalculationDifference = 9,
  /** Unknown or Stale ExecID(17) */
  UnknownOrStaleExecID = 10,
  /** Mismatched data */
  MismatchedData = 11,
  /** Unknown ClOrdID(11) */
  UnknownClOrdID = 12,
  /** Warehouse request rejected */
  WarehouseRequestRejected = 13,
  /** Duplicate or missing IndividualAllocID(467) */
  DuplicateOrMissingIndividualAllocID = 14,
  /** Trade not recognized */
  TradeNotRecognized = 15,
  /** Trade previously allocated */
  DuplicateTrade = 16,
  /** Incorrect or missing instrument */
  IncorrectOrMissingInstrument = 17,
  /** Incorrect or missing settlement date */
  IncorrectOrMissingSettlDate = 18,
  /** Incorrect or missing fund ID or fund name */
  IncorrectOrMissingFundIDOrFundName = 19,
  /** Incorrect or missing settlement instructions */
  IncorrectOrMissingSettlInstructions = 20,
  /** Incorrect or missing fees */
  IncorrectOrMissingFees = 21,
  /** Incorrect or missing tax */
  IncorrectOrMissingTax = 22,
  /** Unknown or missing party */
  UnknownOrMissingParty = 23,
  /** Incorrect or missing side */
  IncorrectOrMissingSide = 24,
  /** Incorrect or missing net-money */
  IncorrectOrMissingNetMoney = 25,
  /** Incorrect or missing trade date */
  IncorrectOrMissingTradeDate = 26,
  /** Incorrect or missing settlement currency instructions */
  IncorrectOrMissingSettlCcyInstructions = 27,
  /** Incorrrect or missing ProcessCode(81) */
  IncorrectOrMissingProcessCode = 28,
  Other = 99,
}
