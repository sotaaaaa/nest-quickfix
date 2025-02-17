export enum NetworkRequestType {
  /** Snapshot */
  Snapshot = 1,
  /** Subscribe */
  Subscribe = 2,
  /** Stop Subscribing */
  StopSubscribing = 4,
  /** Level of Detail, then NoCompID's becomes required */
  LevelOfDetail = 8,
}
