# Nest Quickfix

A powerful NestJS implementation of the FIX (Financial Information eXchange) protocol, providing high-performance, reliable messaging for financial trading applications.

## Features

- Full support for FIX 4.4 and FIX 5.0 protocols
- Built-in session management and message validation
- Automatic message recovery and sequence number handling
- High performance TCP message handling
- Redis-based session storage
- Event-driven architecture with decorators
- TypeScript decorators for easy message handling
- Comprehensive logging
- Room-based message broadcasting
- Authentication and authorization
- Automatic reconnection
- SSL/TLS support
- Sequence number management
- Heartbeat monitoring
- Message validation
- Custom message store support

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
            tls: {
              enabled: true,
              key: '/path/to/key.pem',
              cert: '/path/to/cert.pem'
            }
          },
          type: 'acceptor', // or 'initiator'
        },
        BeginString: 'FIX.4.4',
        SenderCompID: 'SENDER',
        TargetCompID: 'TARGET',
        HeartBtInt: 30,
        ResetSeqNumFlag: true,
      },
      store: {
        type: 'redis', // or 'memory'
        sessionPrefix: 'fix:',
        redis: {
          host: 'localhost',
          port: 6379,
          password: 'optional'
        }
      },
      auth: {
        getAllowedSenderCompIds: async () => ['001', '002'],
        validateCredentials: async (account, password) => {
          return account === 'valid_account' && password === 'valid_password';
        }
      }
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

  @OnFixMessage(MsgType.NewOrderSingle)
  async onNewOrder(session: Session, message: Message) {
    // Handle new order message
    const orderId = message.getField(Fields.ClOrdID);
    const symbol = message.getField(Fields.Symbol);
    const side = message.getField(Fields.Side);
    const quantity = message.getField(Fields.OrderQty);
    const price = message.getField(Fields.Price);

    // Process order...
  }

  @OnFixMessage(MsgType.OrderCancelRequest) 
  async onCancelRequest(session: Session, message: Message) {
    // Handle cancel request
    const origOrderId = message.getField(Fields.OrigClOrdID);
    // Process cancel...
  }

  @OnDisconnected()
  async onDisconnected(session: Session) {
    // Handle disconnection
    console.log(`Session ${session.getSessionId()} disconnected`);
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
  LogonMessage,
  OrderCancelMessage,
  RejectMessage
} from '@sotatech/nest-quickfix';

@Injectable()
export class TradingService {
  constructor(private readonly fixService: FixService) {}

  // Send new order
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

  // Send logon with credentials
  async sendLogon() {
    const logon = new LogonMessage(30, 0, true);
    logon.setCredentials('username', 'password');
    this.fixService.to('TARGET').send(logon);
  }

  // Send cancel request
  async sendCancel(origOrderId: string) {
    const cancel = new OrderCancelMessage(
      'CANCEL123',
      origOrderId,
      'AAPL',
      Side.Buy,
      100
    );
    this.fixService.to('TARGET').send(cancel);
  }

  // Broadcast message to room
  async broadcastToRoom(message: Message) {
    this.fixService.to('ROOM_117').broadcast(message);
  }

  // Send reject message
  async sendReject(refSeqNum: number, reason: string) {
    const reject = new RejectMessage(
      refSeqNum,
      reason,
      MsgType.NewOrderSingle
    );
    this.fixService.to('TARGET').send(reject);
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
  OrderStatus = 'H',
  NewOrderList = 'E',
  QuoteRequest = 'R',
  Quote = 'S',
  MarketDataRequest = 'V',
  MarketDataSnapshotFullRefresh = 'W',
  SecurityDefinitionRequest = 'c',
  SecurityDefinition = 'd',
  SecurityStatusRequest = 'e',
  TradingSessionStatus = 'h',
  // ... and more
}
```

## Documentation

For more detailed documentation, please visit our [Wiki](https://github.com/sotaaaaa/nest-quickfix/wiki)

## License

MIT
