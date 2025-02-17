import { Injectable } from '@nestjs/common';
import { DiscoveryService, MetadataScanner } from '@nestjs/core';
import { FIX_METADATA } from '../constants/metadata.constant';

/**
 * Interface defining the structure of FIX event handlers
 */
export interface FixMetadata {
  onLogon?: Function;
  onLogout?: Function;
  onConnected?: Function;
  onDisconnected?: Function;
  onMessage?: {
    handler: Function;
    msgType?: string;
  };
}

/**
 * Service to explore and collect FIX-related metadata from application components
 */
@Injectable()
export class FixMetadataExplorer {
  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly metadataScanner: MetadataScanner,
  ) {}

  /**
   * Explores all providers and controllers to find FIX-related metadata
   * @returns Array of FixMetadata objects containing event handlers
   */
  explore(): FixMetadata[] {
    const instances = this.getAllInstances();
    return this.extractMetadataFromInstances(instances);
  }

  /**
   * Gets all provider and controller instances from the application
   */
  private getAllInstances() {
    const providers = this.discoveryService.getProviders();
    const controllers = this.discoveryService.getControllers();

    return [...providers, ...controllers]
      .filter((wrapper) => wrapper.instance)
      .map((wrapper) => wrapper.instance);
  }

  /**
   * Extracts FIX metadata from an array of instances
   */
  private extractMetadataFromInstances(instances): FixMetadata[] {
    const metadata: FixMetadata[] = [];

    instances.forEach((instance) => {
      const instancePrototype = Object.getPrototypeOf(instance);
      const methods = this.metadataScanner.getAllMethodNames(instancePrototype);

      methods.forEach((method) => {
        const meta = this.extractMethodMetadata(instance, method);
        if (Object.keys(meta).length > 0) {
          metadata.push(meta);
        }
      });
    });

    return metadata;
  }

  /**
   * Extracts metadata from a single method
   */
  private extractMethodMetadata(instance: any, method: string): FixMetadata {
    const meta: FixMetadata = {};
    const handler = instance[method].bind(instance);

    const metadataMap = {
      [FIX_METADATA.LOGON]: 'onLogon',
      [FIX_METADATA.LOGOUT]: 'onLogout',
      [FIX_METADATA.CONNECTED]: 'onConnected',
      [FIX_METADATA.DISCONNECTED]: 'onDisconnected',
    };

    // Check for basic event handlers
    Object.entries(metadataMap).forEach(([key, prop]) => {
      if (Reflect.getMetadata(key, instance[method])) {
        meta[prop] = handler;
      }
    });

    // Check for message handler
    if (Reflect.getMetadata(FIX_METADATA.MESSAGE, instance[method])) {
      meta.onMessage = {
        handler,
        msgType: Reflect.getMetadata(
          FIX_METADATA.MESSAGE_TYPE,
          instance[method],
        ),
      };
    }

    return meta;
  }
}
