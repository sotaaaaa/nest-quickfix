/**
 * Indicates which price to use to satisfy the boundary condition.
 * tag: 42679
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamRealizedVarianceMethod {
  Previous = 0,
  Last = 1,
  Both = 2,
}
