# Nest Quickfix

A powerful NestJS implementation of the FIX (Financial Information eXchange) protocol, providing high-performance, reliable messaging for financial trading applications.

## Features

- Full support for FIX 4.4 and FIX 5.0 protocols
- Built-in session management and message validation
- Automatic message recovery and sequence number handling
- High performance TCP message handling
- Redis-based session storage
- Event-driven architecture
- TypeScript decorators for easy message handling
- Comprehensive logging

## Installation

```bash
# Using npm
npm install @sotatech/nest-quickfix

# Using yarn
yarn add @sotatech/nest-quickfix

# Using pnpm
pnpm add @sotatech/nest-quickfix
```

## Quick Start

### 1. Register FIXModule

```typescript
import { Module } from '@nestjs/common';
import { FIXModule } from '@sotatech/nest-quickfix';

@Module({
  imports: [
    FIXModule.register({
      config: {
        application: {
          name: 'MyApp',
          dictionary: 'FIX44',
          protocol: 'ascii',
          reconnectSeconds: 30,
          tcp: {
            host: 'localhost',
            port: 9876,
          },
          type: 'acceptor',
        },
        BeginString: 'FIX.4.4',
        SenderCompID: 'SENDER',
        TargetCompID: 'TARGET',
        HeartBtInt: 30,
        ResetSeqNumFlag: true,
      },
      store: {
        type: 'memory',
        sessionPrefix: 'fix:',
      },
    }),
  ],
})
export class AppModule {}
```

### 2. Create Controller with FIX Event Handlers

```typescript
import { Controller } from '@nestjs/common';
import {
  Message,
  OnLogon,
  Session,
  FixService,
  Field,
  Fields,
  MsgType,
  OnFixMessage,
  OnConnected,
  OnDisconnected,
  OnLogout,
} from '@sotatech/nest-quickfix';

@Controller()
export class AppController {
  constructor(private readonly fixService: FixService) {}

  @OnLogon()
  async onLogon(session: Session, message: Message) {
    // Join a room for broadcasting
    session.join('ROOM_117');

    // Send Trading Session Status
    const statusMsg = new Message(
      new Field(Fields.BeginString, 'FIX.4.4'),
      new Field(Fields.MsgType, MsgType.TradingSessionStatus),
      new Field(Fields.TradingSessionID, '1'),
    );

    // Send to specific session
    this.fixService.to('ROOM_117').send(statusMsg);
  }

  @OnFixMessage()
  async onFixMessage(session: Session, message: Message) {
    // Handle all FIX messages
    console.log('Message received:', message.toJSON());
  }

  @OnFixMessage(MsgType.Logon)
  async onLogonMessage(session: Session, message: Message) {
    // Handle specific message type
    console.log('Logon message:', message.toString());
  }

  @OnConnected()
  async onConnected(session: Session) {
    console.log('Session connected');
  }

  @OnDisconnected()
  async onDisconnected(session: Session) {
    console.log('Session disconnected');
  }

  @OnLogout()
  async onLogout(session: Session, message: Message) {
    console.log('Logout received:', message.toString());
  }
}
```

### 3. Create Trading Service

```typescript
import { Injectable } from '@nestjs/common';
import {
  FixService,
  Message,
  Field,
  Fields,
  MsgType,
  Side,
  OrdType,
  TimeInForce,
} from '@sotatech/nest-quickfix';

@Injectable()
export class TradingService {
  constructor(private readonly fixService: FixService) {}

  async sendNewOrder() {
    const order = new Message(
      new Field(Fields.MsgType, MsgType.NewOrderSingle),
      new Field(Fields.ClOrdID, 'ORDER123'),
      new Field(Fields.Symbol, 'AAPL'),
      new Field(Fields.Side, Side.Buy),
      new Field(Fields.OrderQty, 100),
      new Field(Fields.Price, 150.5),
      new Field(Fields.OrdType, OrdType.Limit),
      new Field(Fields.TimeInForce, TimeInForce.Day),
    );

    this.fixService.to('TARGET').send(order);
  }
}
```

## Available Decorators

- `@OnLogon()` - Handle logon events
- `@OnLogout()` - Handle logout events
- `@OnConnected()` - Handle connection events
- `@OnDisconnected()` - Handle disconnection events
- `@OnFixMessage(msgType?)` - Handle all or specific message types

## Message Types (MsgType)

```typescript
export enum MsgType {
  Heartbeat = '0',
  TestRequest = '1',
  ResendRequest = '2',
  Reject = '3',
  SequenceReset = '4',
  Logout = '5',
  ExecutionReport = '8',
  OrderSingle = 'D',
  OrderCancel = 'F',
  // ... and more
}
```

## Documentation

For more detailed documentation, please visit our [Wiki](https://github.com/sotaaaaa/nest-quickfix/wiki)

## License

MIT
