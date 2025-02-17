/**
 * Used to identify whether these delivery instructions are for the buyside or the sellside.
 * tag: 1164
 * @readonly
 * @enum {string} (char)
 */
export enum SettlObligSource {
  /** Instructions of Broker */
  InstructionsOfBroker = '1',
  /** Instructions for Institution */
  InstructionsForInstitution = '2',
  /** Investor */
  Investor = '3',
  /** Buyer's settlement instructions */
  BuyersSettlementInstructions = '4',
  /** Seller's settlement instructions */
  SellersSettlementInstructions = '5',
}
