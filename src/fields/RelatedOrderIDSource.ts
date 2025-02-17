/**
 * Describes the source of the identifier that RelatedOrderID(2887) represents.
 * tag: 2888
 * @readonly
 * @enum {number} (int)
 */
export enum RelatedOrderIDSource {
  /** Non-FIX Source */
  NonFIXSource = 0,
  SystemOrderIdentifier = 1,
  ClientOrderIdentifier = 2,
  SecondaryOrderIdentifier = 3,
  SecondaryClientOrderIdentifier = 4,
}
