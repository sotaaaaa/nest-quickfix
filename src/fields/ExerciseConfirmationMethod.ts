/**
 * Indicates whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent.
 * tag: 41111
 * @readonly
 * @enum {number} (int)
 */
export enum ExerciseConfirmationMethod {
  /** Not required */
  NotRequired = 0,
  /** Non-electronic */
  NonElectronic = 1,
  /** Electronic */
  Electronic = 2,
  /** Unknown at time of report */
  Unknown = 3,
}
