/**
 * Result party detail definition request.
 * tag: 1877
 * @readonly
 * @enum {number} (int)
 */
export enum PartyDetailRequestResult {
  /** Successful (default) */
  Successful = 0,
  /** Invalid party(-ies) */
  InvalidParty = 1,
  /** Invalid related party(-ies) */
  InvalidRelatedParty = 2,
  /** Invalid party status(es) */
  InvalidPartyStatus = 3,
  /** Not authorized */
  NotAuthorized = 98,
  /** Other */
  Other = 99,
}
