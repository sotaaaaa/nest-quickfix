/**
 * Denotes the reason for the Opening Delay or Trading Halt.
 * tag: 327
 * @readonly
 * @enum {number} (int)
 */
export enum HaltReason {
  /** News Dissemination */
  NewsDissemination = 0,
  /** Order Influx */
  OrderInflux = 1,
  /** Order Imbalance */
  OrderImbalance = 2,
  /** Additional Information */
  AdditionalInformation = 3,
  /** News Pending */
  NewsPending = 4,
  /** Equipment Changeover */
  EquipmentChangeover = 5,
}
