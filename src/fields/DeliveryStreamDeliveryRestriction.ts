/**
 * Specifies under what conditions the buyer and seller should be excused of their delivery obligations.
 * tag: 41063
 * @readonly
 * @enum {number} (int)
 */
export enum DeliveryStreamDeliveryRestriction {
  Firm = 1,
  NonFirm = 2,
  ForceMajeure = 3,
  SystemFirm = 4,
  UnitFirm = 5,
}
