/**
 * Identifies the reason for rejecting a Confirmation.
 * tag: 774
 * @readonly
 * @enum {number} (int)
 */
export enum ConfirmRejReason {
  /** Incorrect or missing account */
  MismatchedAccount = 1,
  /** Incorrect or missing settlement instructions */
  MissingSettlementInstructions = 2,
  /** Unknown or missing IndividualAllocId(467) */
  UnknownOrMissingIndividualAllocId = 3,
  /** Transaction not recognized */
  TransactionNotRecognized = 4,
  /** Duplicate transaction */
  DuplicateTransaction = 5,
  /** Incorrect or missing instrument */
  IncorrectOrMissingInstrument = 6,
  /** Incorrect or missing price */
  IncorrectOrMissingPrice = 7,
  /** Incorrect or missing commission */
  IncorrectOrMissingCommission = 8,
  /** Incorrect or missing settlement date */
  IncorrectOrMissingSettlDate = 9,
  /** Incorrect or missing fund ID or fund name */
  IncorrectOrMissingFundIDOrFundName = 10,
  /** Incorrect or missing quantity */
  IncorrectOrMissingQuantity = 11,
  /** Incorrect or missing fees */
  IncorrectOrMissingFees = 12,
  /** Incorrect or missing tax */
  IncorrectOrMissingTax = 13,
  /** Incorrect or missing party */
  IncorrectOrMissingParty = 14,
  /** Incorrect or missing side */
  IncorrectOrMissingSide = 15,
  /** Incorrect or missing net-money */
  IncorrectOrMissingNetMoney = 16,
  /** Incorrect or missing trade date */
  IncorrectOrMissingTradeDate = 17,
  /** Incorrect or missing settlement currency instructions */
  IncorrectOrMissingSettlCcyInstructions = 18,
  /** Incorrect or missing capacity */
  IncorrectOrMissingCapacity = 19,
  Other = 99,
}
