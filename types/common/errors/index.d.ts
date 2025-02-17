export declare class FIXError extends Error {
    constructor(message: string);
}
export declare class ParserError extends FIXError {
    constructor(message: string);
}
export declare class SessionError extends FIXError {
    constructor(message: string);
}
export declare class ValidationError extends FIXError {
    constructor(message: string);
}
