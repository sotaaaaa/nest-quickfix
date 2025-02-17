/**
 * Level of Response requested from receiver of quote messages. A default value should be bilaterally agreed.
 * tag: 301
 * @readonly
 * @enum {number} (int)
 */
export enum QuoteResponseLevel {
  /** No Acknowledgement */
  NoAcknowledgement = 0,
  /** Acknowledge only negative or erroneous quotes */
  AcknowledgeOnlyNegativeOrErroneousQuotes = 1,
  /** Acknowledge each quote message */
  AcknowledgeEachQuoteMessage = 2,
  /** Summary Acknowledgement */
  SummaryAcknowledgement = 3,
}
