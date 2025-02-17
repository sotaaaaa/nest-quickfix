export declare class SessionError extends Error {
    readonly code: string;
    constructor(message: string, code: string);
}
export declare class SequenceError extends Error {
    readonly expectedSeqNum: number;
    readonly receivedSeqNum: number;
    constructor(message: string, expectedSeqNum: number, receivedSeqNum: number);
}
export declare class ConnectionError extends Error {
    readonly attempt: number;
    constructor(message: string, attempt: number);
}
export declare class ValidationError extends Error {
    readonly field: string;
    constructor(message: string, field: string);
}
