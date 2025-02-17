/**
 * Indicates whether an option contract is a put, call, chooser or undetermined.
 * tag: 201
 * @readonly
 * @enum {number} (int)
 */
export enum PutOrCall {
  Put = 0,
  Call = 1,
  Other = 2,
  Chooser = 3,
}
