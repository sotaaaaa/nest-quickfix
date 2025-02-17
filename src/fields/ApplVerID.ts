/**
 * Specifies the application layer version being applied at the message level.
 * tag: 1128
 * @readonly
 * @enum {string} (String)
 */
export enum ApplVerID {
  /** FIX27 */
  FIX27 = '0',
  /** FIX30 */
  FIX30 = '1',
  /** FIX40 */
  FIX40 = '2',
  /** FIX41 */
  FIX41 = '3',
  /** FIX42 */
  FIX42 = '4',
  /** FIX43 */
  FIX43 = '5',
  /** FIX44 */
  FIX44 = '6',
  /** FIX50 */
  FIX50 = '7',
  /** FIX50SP1 */
  FIX50SP1 = '8',
  /** FIX50SP2 */
  FIX50SP2 = '9',
  /** FIXLatest */
  FIXLatest = '10',
}
