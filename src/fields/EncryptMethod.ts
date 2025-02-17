/**
 * Method of encryption.
 * tag: 98
 * @readonly
 * @enum {number} (int)
 */
export enum EncryptMethod {
  /** None / Other */
  None = 0,
  /** PKCS (Proprietary) */
  PKCS = 1,
  /** DES (ECB Mode) */
  DES = 2,
  /** PKCS / DES (Proprietary) */
  PKCSDES = 3,
  /** PGP / DES (Defunct) */
  PGPDES = 4,
  /** PGP / DES-MD5 (See app note on FIX web site) */
  PGPDESMD5 = 5,
  /** PEM / DES-MD5 (see app note on FIX web site) */
  PEM = 6,
}
