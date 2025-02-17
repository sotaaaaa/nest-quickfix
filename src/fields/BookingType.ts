/**
 * Method for booking out this order. Used when notifying a broker that an order to be settled by that broker is to be booked out as an OTC derivative (e.g. CFD or similar).
 * tag: 775
 * @readonly
 * @enum {number} (int)
 */
export enum BookingType {
  /** Regular booking */
  RegularBooking = 0,
  /** CFD (Contract for difference) */
  CFD = 1,
  /** Total Return Swap */
  TotalReturnSwap = 2,
}
