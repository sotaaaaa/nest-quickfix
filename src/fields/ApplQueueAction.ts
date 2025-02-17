/**
 * Action to take to resolve an application message queue (backlog).
 * tag: 815
 * @readonly
 * @enum {number} (int)
 */
export enum ApplQueueAction {
  /** No Action Taken */
  NoActionTaken = 0,
  /** Queue Flushed */
  QueueFlushed = 1,
  /** Overlay Last */
  OverlayLast = 2,
  /** End Session */
  EndSession = 3,
}
