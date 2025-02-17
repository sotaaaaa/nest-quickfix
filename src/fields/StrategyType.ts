/**
 * Specifies the type of trade strategy.
 * tag: 2141
 * @readonly
 * @enum {string} (String)
 */
export enum StrategyType {
  /** Straddle */
  Straddle = 'STD',
  /** Strangle */
  Strangle = 'STG',
  /** Butterfly */
  Butterfly = 'BF',
  /** Condor */
  Condor = 'CNDR',
  /** Callable inversible snowball */
  CallableInversibleSnowball = 'CISN',
  /** Other */
  Other = 'OTHER',
}
