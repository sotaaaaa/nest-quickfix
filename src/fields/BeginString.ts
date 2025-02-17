/**
 * Identifies beginning of new message and session protocol version by means of a session profile identifier (see FIX Session Layer for details). ALWAYS FIRST FIELD IN MESSAGE. (Always unencrypted).
 * tag: 8
 * @readonly
 * @enum {string} (String)
 */
export enum BeginString {
  /** Session profile FIX.4.2 */
  FIX42 = 'FIX.4.2',
  /** Session profile FIX4 */
  FIX44 = 'FIX.4.4',
  FIXT11 = 'FIXT.1.1',
}
