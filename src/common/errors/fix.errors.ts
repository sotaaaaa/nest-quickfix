export class SessionError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    this.name = 'SessionError';
  }
}

export class SequenceError extends Error {
  constructor(
    message: string,
    public readonly expectedSeqNum: number,
    public readonly receivedSeqNum: number
  ) {
    super(message);
    this.name = 'SequenceError';
  }
}

export class ConnectionError extends Error {
  constructor(message: string, public readonly attempt: number) {
    super(message);
    this.name = 'ConnectionError';
  }
}

export class ValidationError extends Error {
  constructor(message: string, public readonly field: string) {
    super(message);
    this.name = 'ValidationError';
  }
} 