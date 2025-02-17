/**
 * Specifies the type of Market Data update.
 * tag: 265
 * @readonly
 * @enum {number} (int)
 */
export enum MDUpdateType {
  /** Full refresh */
  FullRefresh = 0,
  /** Incremental refresh */
  IncrementalRefresh = 1,
}
