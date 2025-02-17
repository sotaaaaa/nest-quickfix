export declare enum RiskLimitAction {
    QueueInbound = 0,
    QueueOutbound = 1,
    Reject = 2,
    Disconnect = 3,
    Warning = 4,
    PingCreditCheckWithRevalidation = 5,
    PingCreditCheckNoRevalidation = 6,
    PushCreditCheckWithRevalidation = 7,
    PushCreditCheckNoRevalidation = 8,
    Suspend = 9,
    HaltTrading = 10
}
