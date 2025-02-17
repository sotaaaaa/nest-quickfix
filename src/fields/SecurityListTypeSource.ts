/**
 * Specifies a specific source for a SecurityListType. Relevant when a certain type can be provided from various sources.
 * tag: 1471
 * @readonly
 * @enum {number} (int)
 */
export enum SecurityListTypeSource {
  /** ICB (Industry Classification Benchmark) published by Dow Jones and FTSE - www.icbenchmark.com */
  ICB = 1,
  /** NAICS (North American Industry Classification System). Replaced SIC (Standard Industry Classification) www.census.gov/naics or www.naics.com. */
  NAICS = 2,
  /** GICS (Global Industry Classification Standard) published by Standards & Poor */
  GICS = 3,
}
