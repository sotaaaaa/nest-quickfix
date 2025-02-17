/**
 * Code to represent the type of event
 * tag: 865
 * @readonly
 * @enum {number} (int)
 */
export enum EventType {
  /** Put */
  Put = 1,
  /** Call */
  Call = 2,
  /** Tender */
  Tender = 3,
  /** Sinking fund call */
  SinkingFundCall = 4,
  /** Activation */
  Activation = 5,
  /** Inactivation */
  Inactiviation = 6,
  /** Last eligible trade date */
  LastEligibleTradeDate = 7,
  /** Swap start date */
  SwapStartDate = 8,
  /** Swap end date */
  SwapEndDate = 9,
  /** Swap roll date */
  SwapRollDate = 10,
  /** Swap next start date */
  SwapNextStartDate = 11,
  /** Swap next roll date */
  SwapNextRollDate = 12,
  /** First delivery date */
  FirstDeliveryDate = 13,
  /** Last delivery date */
  LastDeliveryDate = 14,
  /** Initial inventory due date */
  InitialInventoryDueDate = 15,
  /** Final inventory due date */
  FinalInventoryDueDate = 16,
  /** First intent date */
  FirstIntentDate = 17,
  /** Last intent date */
  LastIntentDate = 18,
  /** Position removal date */
  PositionRemovalDate = 19,
  /** Minimum notice */
  MinimumNotice = 20,
  /** Delivery start time */
  DeliveryStartTime = 21,
  /** Delivery end time */
  DeliveryEndTime = 22,
  FirstNoticeDate = 23,
  LastNoticeDate = 24,
  /** First exercise date */
  FirstExerciseDate = 25,
  /** Redemption date */
  RedemptionDate = 26,
  /** Trade continuation effective date */
  TrdCntntnEfctvDt = 27,
  /** Other */
  Other = 99,
}
