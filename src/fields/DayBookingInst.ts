/**
 * Indicates whether or not automatic booking can occur.
 * tag: 589
 * @readonly
 * @enum {string} (char)
 */
export enum DayBookingInst {
  /** Can trigger booking without reference to the order initiator ("auto") */
  Auto = '0',
  /** Speak with order initiator before booking ("speak first") */
  SpeakWithOrderInitiatorBeforeBooking = '1',
  /** Accumulate */
  Accumulate = '2',
}
