/**
 * Indicates the type of the currency rate being used. This is relevant for currencies that have offshore rate that different from onshore rate.
 * tag: 2795
 * @readonly
 * @enum {number} (int)
 */
export enum OffshoreIndicator {
  Regular = 0,
  Offshore = 1,
  Onshore = 2,
}
