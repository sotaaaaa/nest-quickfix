/**
 * Type of data source identifier.
 * tag: 41282
 * @readonly
 * @enum {number} (int)
 */
export enum StreamCommodityDataSourceIDType {
  /** City (4 character business center code) */
  City = 0,
  /** Airport (IATA standard) */
  Airport = 1,
  /** Weather station WBAN (Weather Bureau Army Navy) */
  WeatherStation = 2,
  /** Weather index WMO (World Meteorological Organization) */
  WeatherIndex = 3,
}
