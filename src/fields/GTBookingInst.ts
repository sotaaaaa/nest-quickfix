/**
 * Code to identify whether to book out executions on a part-filled GT order on the day of execution or to accumulate.
 * tag: 427
 * @readonly
 * @enum {number} (int)
 */
export enum GTBookingInst {
  /** Book out all trades on day of execution */
  BookOutAllTradesOnDayOfExecution = 0,
  /** Accumulate executions until order is filled or expires */
  AccumulateUntilFilledOrExpired = 1,
  /** Accumulate until verbally notified otherwise */
  AccumulateUntilVerballyNotifiedOtherwise = 2,
}
