/**
 * Type of Security Definition message response.
 * tag: 323
 * @readonly
 * @enum {number} (int)
 */
export enum SecurityResponseType {
  /** Accept security proposal as-is */
  AcceptAsIs = 1,
  /** Accept security proposal with revisions as indicated in the message */
  AcceptWithRevisions = 2,
  /** List of security types returned per request */
  ListOfSecurityTypesReturnedPerRequest = 3,
  /** List of securities returned per request */
  ListOfSecuritiesReturnedPerRequest = 4,
  /** Reject security proposal */
  RejectSecurityProposal = 5,
  /** Cannot match selection criteria */
  CannotMatchSelectionCriteria = 6,
}
