import { FIXModule } from './fix.module';

// Export the module both as named and default export
export { FIXModule };
export default FIXModule;

// Export types and interfaces
export type { FIXModuleOptions } from './fix.options';
export type { AcceptorConfig } from './acceptor/acceptor.config';
export type { InitiatorConfig } from './initiator/initiator.config';

// Export implementations
export { FIXAcceptor } from './acceptor/acceptor';
export { FIXInitiator } from './initiator/initiator';

// Export other necessary components
export * from './message';
export * from './session';
export * from './decorators';
export * from './services';
export * from './fields';

export { Session } from './interfaces/session.interface';
