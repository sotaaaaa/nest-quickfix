/**
 * Indicates the processing mode for a batch of messages.
 * tag: 50002
 * @readonly
 * @enum {number} (int)
 */
export enum BatchProcessMode {
  /** Update/incremental (default if not specified) */
  Update = 0,
  Snapshot = 1,
}
