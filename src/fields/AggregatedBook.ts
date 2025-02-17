/**
 * Specifies whether or not book entries should be aggregated. (Not specified) = broker option
 * tag: 266
 * @readonly
 * @enum {string} (Boolean)
 */
export enum AggregatedBook {
  /** book entries to be aggregated */
  BookEntriesToBeAggregated = 'Y',
  /** book entries should not be aggregated */
  BookEntriesShouldNotBeAggregated = 'N',
}
