/**
 * Type of exercise of a derivatives security
 * tag: 1194
 * @readonly
 * @enum {number} (int)
 */
export enum ExerciseStyle {
  /** European */
  European = 0,
  /** American */
  American = 1,
  /** Bermuda */
  Bermuda = 2,
  /** Other */
  Other = 99,
}
