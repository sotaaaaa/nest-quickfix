/**
 * Part of trading cycle when an instrument expires. Field is applicable for derivatives.
 * tag: 827
 * @readonly
 * @enum {number} (int)
 */
export enum ExpirationCycle {
  /** Expire on trading session close (default) */
  ExpireOnTradingSessionClose = 0,
  /** Expire on trading session open */
  ExpireOnTradingSessionOpen = 1,
  /** Trading eligibility expiration specified in the date and time fields [EventDate(866) and EventTime(1145)] associated with EventType(865)=7(Last Eligible Trade Date) */
  SpecifiedExpiration = 2,
}
