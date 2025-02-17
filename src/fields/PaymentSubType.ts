/**
 * Used to further clarify the value of PaymentType(40213).
 * tag: 40993
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentSubType {
  /** Initial (principal exchange) */
  Initial = 0,
  /** Intermediate (principal exchange) */
  Intermediate = 1,
  /** Final (principal exchange) */
  Final = 2,
  /** Prepaid (premium forward) */
  Prepaid = 3,
  /** Postpaid (premium forward) */
  Postpaid = 4,
  /** Variable (premium forward) */
  Variable = 5,
  /** Fixed (premium forward) */
  Fixed = 6,
  Swap = 7,
  /** Conditional (principal exchange on exercise) */
  Conditional = 8,
  FixedRate = 9,
  FloatingRate = 10,
}
