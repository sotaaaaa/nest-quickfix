import { SetMetadata } from '@nestjs/common';
import { FIX_METADATA } from '../constants/metadata.constant';
import { MsgType } from '../fields';

export const OnLogon = (): MethodDecorator => {
  return SetMetadata(FIX_METADATA.LOGON, true);
};

export const OnLogout = (): MethodDecorator => {
  return SetMetadata(FIX_METADATA.LOGOUT, true);
};

export const OnConnected = (): MethodDecorator => {
  return SetMetadata(FIX_METADATA.CONNECTED, true);
};

export const OnDisconnected = (): MethodDecorator => {
  return SetMetadata(FIX_METADATA.DISCONNECTED, true);
};

export const OnFixMessage = (msgType?: MsgType): MethodDecorator => {
  if (msgType) {
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
      SetMetadata(FIX_METADATA.MESSAGE, true)(target, propertyKey, descriptor);
      SetMetadata(FIX_METADATA.MESSAGE_TYPE, msgType)(target, propertyKey, descriptor);
      return descriptor;
    };
  }
  return SetMetadata(FIX_METADATA.MESSAGE, true);
};