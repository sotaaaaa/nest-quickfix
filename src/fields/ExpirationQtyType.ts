/**
 * Expiration Quantity type
 * tag: 982
 * @readonly
 * @enum {number} (int)
 */
export enum ExpirationQtyType {
  /** Auto Exercise */
  AutoExercise = 1,
  /** Non Auto Exercise */
  NonAutoExercise = 2,
  /** Final Will Be Exercised */
  FinalWillBeExercised = 3,
  /** Contrary Intention */
  ContraryIntention = 4,
  /** Difference */
  Difference = 5,
}
