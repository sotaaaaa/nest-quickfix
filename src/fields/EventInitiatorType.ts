/**
 * Indicates the type of entity who initiated an event, e.g. modification or cancellation of an order or quote.
 * tag: 2830
 * @readonly
 * @enum {string} (char)
 */
export enum EventInitiatorType {
  /** Customer or client */
  CustomerOrClient = 'C',
  /** Exchange or execution venue */
  ExchangeOrExecutionVenue = 'E',
  /** Firm or broker */
  FirmOrBroker = 'F',
}
