export declare enum ExecTypeReason {
    OrdAddedOnRequest = 1,
    OrdReplacedOnRequest = 2,
    OrdCxldOnRequest = 3,
    UnsolicitedOrdCxl = 4,
    NonRestingOrdAddedOnRequest = 5,
    OrdReplacedWithNonRestingOrdOnRequest = 6,
    TriggerOrdReplacedOnRequest = 7,
    SuspendedOrdReplacedOnRequest = 8,
    SuspendedOrdCxldOnRequest = 9,
    OrdCxlPending = 10,
    PendingCxlExecuted = 11,
    RestingOrdTriggered = 12,
    SuspendedOrdActivated = 13,
    ActiveOrdSuspended = 14,
    OrdExpired = 15
}
