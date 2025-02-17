/**
 * Resolution taken when ApplQueueDepth (813) exceeds ApplQueueMax (812) or system specified maximum queue size.
 * tag: 814
 * @readonly
 * @enum {number} (int)
 */
export enum ApplQueueResolution {
  /** No Action Taken */
  NoActionTaken = 0,
  /** Queue Flushed */
  QueueFlushed = 1,
  /** Overlay Last */
  OverlayLast = 2,
  /** End Session */
  EndSession = 3,
}
