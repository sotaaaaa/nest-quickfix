/**
 * Specifies the reason the PartyActionRequest(35=DH) was rejected.
 * tag: 2333
 * @readonly
 * @enum {number} (int)
 */
export enum PartyActionRejectReason {
  /** Invalid party or parties */
  InvalidParty = 0,
  /** Unknown requesting party */
  UnkReqParty = 1,
  /** Not authorized */
  NotAuthorized = 98,
  /** Other */
  Other = 99,
}
