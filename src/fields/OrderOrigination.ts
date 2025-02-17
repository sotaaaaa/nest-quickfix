/**
 * Identifies the origin of the order.
 * tag: 1724
 * @readonly
 * @enum {number} (int)
 */
export enum OrderOrigination {
  /** Order received from a customer */
  OrderReceivedFromCustomer = 1,
  /** Order received from within the firm */
  OrderReceivedFromWithinFirm = 2,
  /** Order received from another broker-dealer */
  OrderReceivedFromAnotherBrokerDealer = 3,
  /** Order received from a customer or originated from within the firm */
  OrderReceivedFromCustomerOrWithFirm = 4,
  /** Order received from a direct access or sponsored access customer */
  OrderReceivedFromDirectAccessCustomer = 5,
  OrderReceivedFromForeignDealerEquivalent = 6,
  OrderReceivedFromExecutionOnlyService = 7,
}
