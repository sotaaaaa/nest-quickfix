/**
 * FIX Session Events
 */
export enum SessionEvents {
  /** Emitted when a message is received */
  MESSAGE_IN = 'message_in',
  
  /** Emitted when a message is sent */
  MESSAGE_OUT = 'message_out',
  
  /** Emitted when session starts logging on */
  LOGGING_ON = 'logging_on',
  
  /** Emitted when session is logged on */
  LOGGED_ON = 'logged_on',
  
  /** Emitted when session starts logging out */
  LOGGING_OUT = 'logging_out',
  
  /** Emitted when session is logged out */
  LOGGED_OUT = 'logged_out',
  
  /** Emitted on error */
  ERROR = 'error',
  
  /** Emitted when session is disconnected */
  DISCONNECT = 'disconnect'
}

/**
 * FIX Initiator Events
 */
export enum InitiatorEvents {
  /** Emitted when initiator is started */
  STARTED = 'started',
  
  /** Emitted when initiator is stopped */
  STOPPED = 'stopped',
  
  /** Emitted when message is received */
  MESSAGE = 'message',
  
  /** Emitted on error */
  ERROR = 'error',
  
  /** Emitted when max reconnect attempts reached */
  MAX_RECONNECT_ATTEMPTS = 'max_reconnect_attempts',
  
  /** Emitted when reconnect fails */
  RECONNECT_FAILED = 'reconnect_failed',

  /** Emitted when initiator starts logging on */
  LOGGING_ON = 'logging_on',
  
  /** Emitted when initiator is logged on */
  LOGGED_ON = 'logged_on'
}

/**
 * FIX Acceptor Events
 */
export enum AcceptorEvents {
  /** Emitted when acceptor is started */
  STARTED = 'started',
  
  /** Emitted when acceptor is stopped */
  STOPPED = 'stopped',
  
  /** Emitted on error */
  ERROR = 'error'
} 