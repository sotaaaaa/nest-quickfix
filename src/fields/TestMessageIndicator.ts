/**
 * Indicates whether or not this FIX Session is a "test" vs. "production" connection. Useful for preventing "accidents".
 * tag: 464
 * @readonly
 * @enum {string} (Boolean)
 */
export enum TestMessageIndicator {
  /** False (production) */
  False = 'N',
  /** True (test) */
  True = 'Y',
}
