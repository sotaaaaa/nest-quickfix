import { SetMetadata } from '@nestjs/common';
import { FIX_METADATA } from '../constants/metadata.constant';
import { MsgType } from '../fields';

/**
 * Decorator for handling FIX Logon messages
 * Used to mark methods that should be called when a Logon message is received
 */
export const OnLogon = (): MethodDecorator => {
  return SetMetadata(FIX_METADATA.LOGON, true);
};

/**
 * Decorator for handling FIX Logout messages
 * Used to mark methods that should be called when a Logout message is received
 */
export const OnLogout = (): MethodDecorator => {
  return SetMetadata(FIX_METADATA.LOGOUT, true);
};

/**
 * Decorator for handling FIX connection events
 * Used to mark methods that should be called when a FIX session is established
 */
export const OnConnected = (): MethodDecorator => {
  return SetMetadata(FIX_METADATA.CONNECTED, true);
};

/**
 * Decorator for handling FIX disconnection events
 * Used to mark methods that should be called when a FIX session is terminated
 */
export const OnDisconnected = (): MethodDecorator => {
  return SetMetadata(FIX_METADATA.DISCONNECTED, true);
};

/**
 * Decorator for handling FIX messages
 * Used to mark methods that should process specific FIX message types
 * @param msgType Optional parameter to specify which message type to handle
 */
export const OnFixMessage = (msgType?: MsgType): MethodDecorator => {
  if (msgType) {
    // If message type is specified, set both MESSAGE and MESSAGE_TYPE metadata
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
      SetMetadata(FIX_METADATA.MESSAGE, true)(target, propertyKey, descriptor);
      SetMetadata(FIX_METADATA.MESSAGE_TYPE, msgType)(target, propertyKey, descriptor);
      return descriptor;
    };
  }
  // If no message type specified, only set MESSAGE metadata
  return SetMetadata(FIX_METADATA.MESSAGE, true);
};