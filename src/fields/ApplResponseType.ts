/**
 * Used to indicate the type of acknowledgement being sent.
 * tag: 1348
 * @readonly
 * @enum {number} (int)
 */
export enum ApplResponseType {
  /** Request successfully processed */
  RequestSuccessfullyProcessed = 0,
  /** Application does not exist */
  ApplicationDoesNotExist = 1,
  /** Messages not available */
  MessagesNotAvailable = 2,
}
