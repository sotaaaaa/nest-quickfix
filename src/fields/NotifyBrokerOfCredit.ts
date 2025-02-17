/**
 * Indicates whether or not details should be communicated to BrokerOfCredit (i.e. step-in broker).
 * tag: 208
 * @readonly
 * @enum {string} (Boolean)
 */
export enum NotifyBrokerOfCredit {
  /** Details should not be communicated */
  DetailsShouldNotBeCommunicated = 'N',
  /** Details should be communicated */
  DetailsShouldBeCommunicated = 'Y',
}
