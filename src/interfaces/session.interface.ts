import { EventEmitter } from 'events';
import { Message } from '../message/message';
import { Socket } from 'net';
import { SessionConfig } from '../session/session.config';

export interface Session extends EventEmitter {
  getSessionId(): string;
  getSocket(): Socket;
  sendMessage(message: Message): Promise<void>;
  join(roomName: string): void;
  leave(roomName: string): void;
  getRooms(): string[];
  getConfig(): SessionConfig;
} 