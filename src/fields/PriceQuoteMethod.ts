/**
 * Method for price quotation
 * tag: 1196
 * @readonly
 * @enum {string} (String)
 */
export enum PriceQuoteMethod {
  /** Standard, money per unit of a physical */
  Standard = 'STD',
  /** Index */
  Index = 'INX',
  /** Interest rate Index */
  InterestRateIndex = 'INT',
  /** Percent of Par */
  PercentOfPar = 'PCTPAR',
}
