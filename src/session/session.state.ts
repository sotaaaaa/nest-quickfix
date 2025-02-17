/**
 * Session states in FIX protocol
 */
export enum SessionState {
  /** Initial state when session is created */
  DISCONNECTED = 'DISCONNECTED',
  
  /** After TCP connection is established */
  CONNECTED = 'CONNECTED',
  
  /** During logon process */
  LOGGING_ON = 'LOGGING_ON',
  
  /** After successful logon */
  LOGGED_ON = 'LOGGED_ON',
  
  /** During logout process */
  LOGGING_OUT = 'LOGGING_OUT',
  
  /** When error occurs */
  ERROR = 'ERROR',
  
  /** During message resend process */
  RESENDING = 'RESENDING'
} 