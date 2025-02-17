/** Injection token for FIX module options */
export const FIX_OPTIONS = 'FIX_OPTIONS';

/** Injection token for NestJS discovery service */
export const DISCOVERY_SERVICE = 'DISCOVERY_SERVICE';

/** Injection token for NestJS metadata scanner */
export const METADATA_SCANNER = 'METADATA_SCANNER';

/** 
 * Application types supported by the FIX module
 * - ACCEPTOR: Server that accepts incoming FIX connections
 * - INITIATOR: Client that initiates FIX connections
 */
export const APP_TYPE = {
  ACCEPTOR: 'acceptor',
  INITIATOR: 'initiator',
} as const;

/** Default maximum number of concurrent FIX sessions allowed */
export const DEFAULT_MAX_SESSIONS = 100;