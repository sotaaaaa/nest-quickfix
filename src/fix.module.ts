import { DynamicModule, Global, Module, OnModuleInit } from '@nestjs/common';
import {
  DiscoveryModule,
  DiscoveryService,
  MetadataScanner,
} from '@nestjs/core';
import { FIXAcceptor } from './acceptor/acceptor';
import { FIXInitiator } from './initiator/initiator';
import { MessageStore } from './store/message.store';
import { ProtocolManager } from './protocol/manager';
import { FIXModuleOptions } from './fix.options';
import { InitiatorConfig } from './initiator/initiator.config';
import { AcceptorConfig } from './acceptor/acceptor.config';
import { FixMetadataExplorer } from './services/fix.metadata.explorer';
import { FixService } from './services/fix.service';
import { RoomManager } from './services/room.manager';
import { SessionManager } from './session/session.manager';
import {
  FIX_OPTIONS,
  APP_TYPE,
  DISCOVERY_SERVICE,
  METADATA_SCANNER,
  DEFAULT_MAX_SESSIONS,
  MAX_SESSIONS,
} from './constants';

/**
 * Common providers used across different module registration methods
 */
const COMMON_PROVIDERS = [
  FixMetadataExplorer,
  FixService,
  RoomManager,
  SessionManager,
  { provide: MAX_SESSIONS, useValue: DEFAULT_MAX_SESSIONS },
];

/**
 * Common exports used across different module registration methods
 */
const COMMON_EXPORTS = [
  FIXAcceptor,
  FIXInitiator,
  FixService,
  RoomManager,
  SessionManager,
];

/**
 * Factory for creating FIX Acceptor instance
 */
const createAcceptor = (
  config: AcceptorConfig,
  discoveryService: DiscoveryService,
  metadataScanner: MetadataScanner,
  roomManager: RoomManager,
  sessionManager: SessionManager,
) => {
  return config.application.type === APP_TYPE.ACCEPTOR
    ? new FIXAcceptor(
        config,
        discoveryService,
        metadataScanner,
        roomManager,
        sessionManager,
      )
    : null;
};

/**
 * Factory for creating FIX Initiator instance
 */
const createInitiator = (config: InitiatorConfig, roomManager: RoomManager) => {
  return config.application.type === APP_TYPE.INITIATOR
    ? new FIXInitiator(config, roomManager)
    : null;
};

/**
 * Global FIX Protocol Module
 * Provides FIX protocol functionality through NestJS DI system
 */
@Global()
@Module({
  imports: [DiscoveryModule],
  providers: [
    ...COMMON_PROVIDERS,
    {
      provide: DISCOVERY_SERVICE,
      useExisting: DiscoveryService,
    },
    {
      provide: METADATA_SCANNER,
      useFactory: () => new MetadataScanner(),
    },
  ],
  exports: COMMON_EXPORTS,
})
export class FIXModule implements OnModuleInit {
  constructor(
    private readonly metadataExplorer: FixMetadataExplorer,
    private readonly acceptor: FIXAcceptor,
    private readonly fixService: FixService,
    private readonly roomManager: RoomManager,
    private readonly sessionManager: SessionManager,
  ) {}

  /**
   * Register FIX module with static configuration
   * @param options Module configuration options
   */
  static register(options: FIXModuleOptions): DynamicModule {
    const acceptorConfig: AcceptorConfig = {
      ...options.config,
      auth: options?.auth,
      session: options?.session,
    };

    return {
      module: FIXModule,
      imports: [DiscoveryModule],
      providers: [
        { provide: FIX_OPTIONS, useValue: options },
        ...COMMON_PROVIDERS,
        MessageStore,
        ProtocolManager,
        {
          provide: FIXAcceptor,
          useFactory: (
            discoveryService: DiscoveryService,
            metadataScanner: MetadataScanner,
            roomManager: RoomManager,
            sessionManager: SessionManager,
          ) =>
            createAcceptor(
              acceptorConfig,
              discoveryService,
              metadataScanner,
              roomManager,
              sessionManager,
            ),
          inject: [
            DISCOVERY_SERVICE,
            METADATA_SCANNER,
            RoomManager,
            SessionManager,
          ],
        },
        {
          provide: FIXInitiator,
          useFactory: (roomManager: RoomManager) =>
            createInitiator(options.config as InitiatorConfig, roomManager),
          inject: [RoomManager],
        },
      ],
      exports: COMMON_EXPORTS,
    };
  }

  /**
   * Register FIX module with async configuration
   * @param options Async module configuration options
   */
  static registerAsync(options: {
    useFactory: (
      ...args: any[]
    ) => Promise<FIXModuleOptions> | FIXModuleOptions;
    inject?: any[];
  }): DynamicModule {
    return {
      module: FIXModule,
      imports: [DiscoveryModule],
      providers: [
        {
          provide: FIX_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        ...COMMON_PROVIDERS,
        MessageStore,
        ProtocolManager,
        {
          provide: FIXAcceptor,
          useFactory: async (
            discoveryService: DiscoveryService,
            metadataScanner: MetadataScanner,
            roomManager: RoomManager,
            sessionManager: SessionManager,
            fixOptions: FIXModuleOptions,
          ) => {
            const acceptorConfig: AcceptorConfig = {
              ...fixOptions.config,
              auth: fixOptions?.auth,
              session: fixOptions?.session,
            };

            return createAcceptor(
              acceptorConfig,
              discoveryService,
              metadataScanner,
              roomManager,
              sessionManager,
            );
          },
          inject: [
            DISCOVERY_SERVICE,
            METADATA_SCANNER,
            RoomManager,
            SessionManager,
            FIX_OPTIONS,
          ],
        },
        {
          provide: FIXInitiator,
          useFactory: async (
            roomManager: RoomManager,
            fixOptions: FIXModuleOptions,
          ) =>
            createInitiator(fixOptions.config as InitiatorConfig, roomManager),
          inject: [RoomManager, FIX_OPTIONS],
        },
      ],
      exports: COMMON_EXPORTS,
    };
  }

  /**
   * Initialize module and register logon handlers with all sessions
   */
  async onModuleInit() {
    if (!this.acceptor) return;

    const metadata = this.metadataExplorer.explore();
    const sessionManager = this.acceptor.getSessionManager();

    metadata
      .filter((meta) => meta.onLogon)
      .forEach((meta) => {
        sessionManager
          .getAllSessions()
          .forEach((session) => session.registerLogonHandler(meta.onLogon));
      });
  }
}

export default FIXModule;
