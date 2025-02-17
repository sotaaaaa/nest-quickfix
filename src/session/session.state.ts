/**
 * Possible states of a FIX session
 */
export enum SessionState {
  /** Initial state */
  DISCONNECTED = 'DISCONNECTED',
  
  /** TCP connection established */
  CONNECTED = 'CONNECTED',
  
  /** Logon sent/received */
  LOGGING_ON = 'LOGGING_ON',
  
  /** Logon completed */
  LOGGED_ON = 'LOGGED_ON',
  
  /** Logout sent/received */
  LOGGING_OUT = 'LOGGING_OUT',
  
  /** Error state */
  ERROR = 'ERROR',
  
  /** Resending messages */
  RESENDING = 'RESENDING'
} 