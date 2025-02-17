export declare enum SessionEvents {
    MESSAGE_IN = "message_in",
    MESSAGE_OUT = "message_out",
    LOGGING_ON = "logging_on",
    LOGGED_ON = "logged_on",
    LOGGING_OUT = "logging_out",
    LOGGED_OUT = "logged_out",
    ERROR = "error",
    DISCONNECT = "disconnect"
}
export declare enum InitiatorEvents {
    STARTED = "started",
    STOPPED = "stopped",
    MESSAGE = "message",
    ERROR = "error",
    MAX_RECONNECT_ATTEMPTS = "max_reconnect_attempts",
    RECONNECT_FAILED = "reconnect_failed",
    LOGGING_ON = "logging_on",
    LOGGED_ON = "logged_on"
}
export declare enum AcceptorEvents {
    STARTED = "started",
    STOPPED = "stopped",
    ERROR = "error"
}
