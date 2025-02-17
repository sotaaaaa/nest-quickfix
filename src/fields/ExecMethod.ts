/**
 * Specifies how the transaction was executed, e.g. via an automated execution platform or other method.
 * tag: 2405
 * @readonly
 * @enum {number} (int)
 */
export enum ExecMethod {
  Unspecified = 0,
  Manual = 1,
  Automated = 2,
  VoiceBrokered = 3,
}
