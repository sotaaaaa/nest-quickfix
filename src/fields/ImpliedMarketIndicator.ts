/**
 * Indicates that an implied market should be created for either the legs of a multi-leg instrument (Implied-in) or for the multi-leg instrument based on the existence of the legs (Implied-out). Determination as to whether implied markets should be created is generally done at the level of the multi-leg instrument. Commonly used in listed derivatives.
 * tag: 1144
 * @readonly
 * @enum {number} (int)
 */
export enum ImpliedMarketIndicator {
  /** Not implied */
  NotImplied = 0,
  /** Implied-in - The existence of a multi-leg instrument is implied by the legs of that instrument */
  ImpliedIn = 1,
  /** Implied-out - The existence of the underlying legs are implied by the multi-leg instrument */
  ImpliedOut = 2,
  /** Both Implied-in and Implied-out */
  BothImpliedInAndImpliedOut = 3,
}
