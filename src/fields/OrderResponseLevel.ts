/**
 * The level of response requested from receiver of mass order messages. A default value should be bilaterally agreed.
 * tag: 2427
 * @readonly
 * @enum {number} (int)
 */
export enum OrderResponseLevel {
  NoAck = 0,
  MinimumAck = 1,
  AckEach = 2,
  SummaryAck = 3,
}
