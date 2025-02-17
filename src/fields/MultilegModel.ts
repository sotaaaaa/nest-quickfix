/**
 * Specifies the type of multileg order. Defines whether the security is pre-defined or user-defined. Note that MultilegModel(1377)=2(User-defined, Non-Securitized, Multileg) does not apply for Securities.
 * tag: 1377
 * @readonly
 * @enum {number} (int)
 */
export enum MultilegModel {
  /** Predefined Multileg Security */
  PredefinedMultilegSecurity = 0,
  /** User-defined Multileg Security */
  UserDefinedMultilegSecurity = 1,
  /** User-defined, Non-Securitized, Multileg */
  UserDefined = 2,
}
