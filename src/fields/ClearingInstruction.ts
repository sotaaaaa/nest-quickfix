/**
 * Eligibility of this trade for clearing and central counterparty processing.
 * tag: 577
 * @readonly
 * @enum {number} (int)
 */
export enum ClearingInstruction {
  /** Process normally */
  ProcessNormally = 0,
  /** Exclude from all netting */
  ExcludeFromAllNetting = 1,
  /** Bilateral netting only */
  BilateralNettingOnly = 2,
  /** Ex clearing */
  ExClearing = 3,
  /** Special trade */
  SpecialTrade = 4,
  /** Multilateral netting */
  MultilateralNetting = 5,
  /** Clear against central counterparty */
  ClearAgainstCentralCounterparty = 6,
  /** Exclude from central counterparty */
  ExcludeFromCentralCounterparty = 7,
  /** Manual mode (pre-posting and/or pre-giveup) */
  ManualMode = 8,
  /** Automatic posting mode (trade posting to the position account number specified) */
  AutomaticPostingMode = 9,
  /** Automatic give-up mode (trade give-up to the give-up destination number specified) */
  AutomaticGiveUpMode = 10,
  /** Qualified Service Representative QSR */
  QualifiedServiceRepresentativeQSR = 11,
  /** Customer trade */
  CustomerTrade = 12,
  /** Self clearing */
  SelfClearing = 13,
  /** Buy-in */
  BuyIn = 14,
}
