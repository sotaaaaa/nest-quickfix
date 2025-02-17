/**
 * Describes the type of relationship between the order identified by RelatedOrderID(2887) and the order outside of the RelatedOrderGrp component.
 * tag: 2890
 * @readonly
 * @enum {number} (int)
 */
export enum OrderRelationship {
  /** Not specified */
  NotSpecified = 0,
  OrderAggregation = 1,
  OrderSplit = 2,
}
