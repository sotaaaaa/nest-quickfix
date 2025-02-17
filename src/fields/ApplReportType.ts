/**
 * Type of report
 * tag: 1426
 * @readonly
 * @enum {number} (int)
 */
export enum ApplReportType {
  /** Reset ApplSeqNum to new value specified in ApplNewSeqNum(1399) */
  ApplSeqNumReset = 0,
  /** Reports that the last message has been sent for the ApplIDs Refer to RefApplLastSeqNum(1357) for the application sequence number of the last message. */
  LastMessageSent = 1,
  /** Heartbeat message indicating that Application identified by RefApplID(1355) is still alive. Refer to RefApplLastSeqNum(1357) for the application sequence number of the previous message. */
  ApplicationAlive = 2,
  /** Application message re-send completed. */
  ResendComplete = 3,
}
