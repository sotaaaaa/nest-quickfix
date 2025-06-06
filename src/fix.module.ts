import {
  DynamicModule,
  Global,
  Logger,
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
} from '@nestjs/common';
import {
  DiscoveryModule,
  DiscoveryService,
  MetadataScanner,
} from '@nestjs/core';
import { FIXAcceptor } from './acceptor/acceptor';
import { AcceptorConfig } from './acceptor/acceptor.config';
import {
  APP_TYPE,
  DEFAULT_MAX_SESSIONS,
  DISCOVERY_SERVICE,
  FIX_OPTIONS,
  MAX_SESSIONS,
  METADATA_SCANNER,
} from './constants';
import { FIXModuleOptions } from './fix.options';
import { FIXInitiator } from './initiator/initiator';
import { InitiatorConfig } from './initiator/initiator.config';
import { ProtocolManager } from './protocol/manager';
import { FixMetadataExplorer } from './services/fix.metadata.explorer';
import { FixService } from './services/fix.service';
import { RoomManager } from './services/room.manager';
import { SessionManager } from './session/session.manager';

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

interface CreateInstanceProviders {
  config: AcceptorConfig;
  discoveryService: DiscoveryService;
  metadataScanner: MetadataScanner;
  roomManager: RoomManager;
  sessionManager: SessionManager;
}

/**
 * Service to store configuration for deferred initialization
 */
class ConfigStorage {
  private configs: {
    acceptorConfig?: AcceptorConfig;
    initiatorConfig?: InitiatorConfig;
    providers?: CreateInstanceProviders;
  } = {};

  storeAcceptorConfig(
    config: AcceptorConfig,
    providers: CreateInstanceProviders,
  ) {
    this.configs.acceptorConfig = config;
    this.configs.providers = providers;
  }

  storeInitiatorConfig(config: InitiatorConfig, roomManager: RoomManager) {
    this.configs.initiatorConfig = config;
    if (!this.configs.providers)
      this.configs.providers = {} as CreateInstanceProviders;
    this.configs.providers.roomManager = roomManager;
  }

  getConfigs() {
    return this.configs;
  }

  clear() {
    this.configs = {};
  }
}

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
export class FIXModule implements OnModuleInit, OnApplicationBootstrap {
  private fixAcceptor: FIXAcceptor | null = null;
  private fixInitiator: FIXInitiator | null = null;
  private readonly logger = new Logger(FIXModule.name);

  constructor(
    private readonly metadataExplorer: FixMetadataExplorer,
    private readonly configStorage: ConfigStorage,
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
        ProtocolManager,
        ConfigStorage,
        {
          provide: FIXAcceptor,
          useFactory: (
            discoveryService: DiscoveryService,
            metadataScanner: MetadataScanner,
            roomManager: RoomManager,
            sessionManager: SessionManager,
            configStorage: ConfigStorage,
          ) => {
            configStorage.storeAcceptorConfig(acceptorConfig, {
              config: acceptorConfig,
              discoveryService,
              metadataScanner,
              roomManager,
              sessionManager,
            });
            return null;
          },
          inject: [
            DISCOVERY_SERVICE,
            METADATA_SCANNER,
            RoomManager,
            SessionManager,
            ConfigStorage,
          ],
        },
        {
          provide: FIXInitiator,
          useFactory: (
            roomManager: RoomManager,
            configStorage: ConfigStorage,
          ) => {
            configStorage.storeInitiatorConfig(
              options.config as InitiatorConfig,
              roomManager,
            );
            return null;
          },
          inject: [RoomManager, ConfigStorage],
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
        ProtocolManager,
        ConfigStorage,
        {
          provide: FIXAcceptor,
          useFactory: async (
            discoveryService: DiscoveryService,
            metadataScanner: MetadataScanner,
            roomManager: RoomManager,
            sessionManager: SessionManager,
            fixOptions: FIXModuleOptions,
            configStorage: ConfigStorage,
          ) => {
            const acceptorConfig: AcceptorConfig = {
              ...fixOptions.config,
              auth: fixOptions?.auth,
              session: fixOptions?.session,
            };
            configStorage.storeAcceptorConfig(acceptorConfig, {
              config: acceptorConfig,
              discoveryService,
              metadataScanner,
              roomManager,
              sessionManager,
            });
            return null;
          },
          inject: [
            DISCOVERY_SERVICE,
            METADATA_SCANNER,
            RoomManager,
            SessionManager,
            FIX_OPTIONS,
            ConfigStorage,
          ],
        },
        {
          provide: FIXInitiator,
          useFactory: async (
            roomManager: RoomManager,
            fixOptions: FIXModuleOptions,
            configStorage: ConfigStorage,
          ) => {
            configStorage.storeInitiatorConfig(
              fixOptions.config as InitiatorConfig,
              roomManager,
            );
            return null;
          },
          inject: [RoomManager, FIX_OPTIONS, ConfigStorage],
        },
      ],
      exports: COMMON_EXPORTS,
    };
  }

  /**
   * Initialize module and register logon handlers with all sessions
   */
  async onModuleInit() {
    this.logger.log(
      'FIXModule initialized, waiting for application bootstrap...',
    );
  }

  async onApplicationBootstrap() {
    this.logger.log('Application bootstrapped, creating FIX instances...');

    const { acceptorConfig, initiatorConfig, providers } =
      this.configStorage.getConfigs();

    if (!providers) {
      this.logger.warn('No stored providers found');
      return;
    }

    if (acceptorConfig) {
      this.fixAcceptor = createAcceptor(
        acceptorConfig,
        providers.discoveryService,
        providers.metadataScanner,
        providers.roomManager,
        providers.sessionManager,
      );
      this.logger.log('FIXAcceptor created');
    }

    if (initiatorConfig) {
      this.fixInitiator = createInitiator(
        initiatorConfig,
        providers.roomManager,
      );
      this.logger.log('FIXInitiator created');
    }

    // Register handlers and cleanup
    this.registerLogonHandlers();
    this.configStorage.clear();
  }

  private registerLogonHandlers() {
    if (!this.fixAcceptor) return;
    const metadata = this.metadataExplorer.explore();
    const sessionManager = this.fixAcceptor.getSessionManager();
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
