export declare enum SessionStatus {
    SessionActive = 0,
    SessionPasswordChanged = 1,
    SessionPasswordDueToExpire = 2,
    NewSessionPasswordDoesNotComplyWithPolicy = 3,
    SessionLogoutComplete = 4,
    InvalidUsernameOrPassword = 5,
    AccountLocked = 6,
    LogonsAreNotAllowedAtThisTime = 7,
    PasswordExpired = 8,
    ReceivedMsgSeqNumTooLow = 9,
    ReceivedNextExpectedMsgSeqNumTooHigh = 10
}
