/**
 * Identifies reason for rejection (of a settlement instruction request message).
 * tag: 792
 * @readonly
 * @enum {number} (int)
 */
export enum SettlInstReqRejCode {
  /** Unable to process request */
  UnableToProcessRequest = 0,
  /** Unknown account */
  UnknownAccount = 1,
  /** No matching settlement instructions found */
  NoMatchingSettlementInstructionsFound = 2,
  /** Other */
  Other = 99,
}
