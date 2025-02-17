/**
 * Specifies the type of respondents requested.
 * tag: 1172
 * @readonly
 * @enum {number} (int)
 */
export enum RespondentType {
  /** All market participants */
  AllMarketParticipants = 1,
  /** Specified market participants */
  SpecifiedMarketParticipants = 2,
  /** All Market Makers */
  AllMarketMakers = 3,
  /** Primary Market Maker(s) */
  PrimaryMarketMaker = 4,
}
