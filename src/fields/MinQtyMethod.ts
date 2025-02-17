/**
 * Indicates how the minimum quantity should be applied when executing the order.
 * tag: 1822
 * @readonly
 * @enum {number} (int)
 */
export enum MinQtyMethod {
  /** Once (applies only to first execution) */
  Once = 1,
  /** Multiple (applies to every execution) */
  Multiple = 2,
}
