/**
 * Type of Application Message Request being made.
 * tag: 1347
 * @readonly
 * @enum {number} (int)
 */
export enum ApplReqType {
  /** Retransmission of application messages for the specified Applications */
  Retransmission = 0,
  /** Subscription to the specified Applications */
  Subscription = 1,
  /** Request for the last ApplLastSeqNum published for the specified Applications */
  RequestLastSeqNum = 2,
  /** Request valid set of Applications */
  RequestApplications = 3,
  /** Unsubscribe to the specified Applications */
  Unsubscribe = 4,
  /** Cancel retransmission */
  CancelRetransmission = 5,
  /** Cancel retransmission and unsubscribe to the specified applications */
  CancelRetransmissionUnsubscribe = 6,
}
