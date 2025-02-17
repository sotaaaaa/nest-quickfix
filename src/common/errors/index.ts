export class FIXError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FIXError';
  }
}

export class ParserError extends FIXError {
  constructor(message: string) {
    super(message);
    this.name = 'ParserError';
  }
}

export class SessionError extends FIXError {
  constructor(message: string) {
    super(message);
    this.name = 'SessionError';
  }
}

export class ValidationError extends FIXError {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
} 