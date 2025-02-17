/**
 * Specifies the type of delivery stream.
 * tag: 41058
 * @readonly
 * @enum {number} (int)
 */
export enum DeliveryStreamType {
  /** Periodic (default if not specified) */
  Periodic = 0,
  /** Initial */
  Initial = 1,
  /** Single */
  Single = 2,
}
