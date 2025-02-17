/**
 * Identifies the type of complex event.
 * tag: 1484
 * @readonly
 * @enum {number} (int)
 */
export enum ComplexEventType {
  /** Capped */
  Capped = 1,
  /** Trigger */
  Trigger = 2,
  /** Knock-in up */
  KnockInUp = 3,
  /** Knock-in down */
  KnockInDown = 4,
  /** Knock-out up */
  KnockOutUp = 5,
  /** Knock-out down */
  KnockOutDown = 6,
  /** Underlying */
  Underlying = 7,
  /** Reset Barrier */
  ResetBarrier = 8,
  /** Rolling Barrier */
  RollingBarrier = 9,
  /** One-touch */
  OneTouch = 10,
  /** No-touch */
  NoTouch = 11,
  /** Double one-touch */
  DblOneTouch = 12,
  /** Double no-touch */
  DblNoTouch = 13,
  /** Foreign exchange composite */
  FXComposite = 14,
  /** Foreign exchange Quanto */
  FXQuanto = 15,
  /** Foreign exchange cross currency */
  FXCrssCcy = 16,
  /** Strike spread */
  StrkSpread = 17,
  /** Calendar spread */
  ClndrSpread = 18,
  /** Price observation (Asian or Lookback) */
  PxObsvtn = 19,
  /** Pass-through */
  PassThrough = 20,
  /** Strike schedule */
  StrkSched = 21,
  /** Equity valuation */
  EquityValuation = 22,
  /** Dividend valuation */
  DividendValuation = 23,
}
