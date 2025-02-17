/**
 * The notifying party is the party that notifies the other party when a credit event has occurred by means of a credit event notice. If more than one party is referenced as being the notifying party then either party may notify the other of a credit event occurring.
 * tag: 2134
 * @readonly
 * @enum {number} (int)
 */
export enum ComplexEventCreditEventNotifyingParty {
  /** Seller notifies */
  SellerNotifies = 0,
  /** Buyer notifies */
  BuyerNotifies = 1,
  /** Seller or buyer notifies */
  SellerOrBuyerNotifies = 2,
}
