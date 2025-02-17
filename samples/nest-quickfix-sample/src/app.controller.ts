/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
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
  constructor(
    private readonly appService: AppService,
    private readonly fixService: FixService,
  ) {}

  @OnLogon()
  async onLogon(session: Session, message: Message) {
    console.log('onLogon', message);
    session.join('117');

    const outMessage = new Message(
      new Field(Fields.BeginString, 'FIX.4.4'),
      new Field(Fields.MsgType, MsgType.TradingSessionStatus),
      new Field(Fields.TradingSessionID, '1'),
    );

    // Send a message to a specific session
    this.fixService.to('117').send(outMessage);
  }

  @OnFixMessage()
  async onFixMessage(session: Session, message: Message) {
    console.log('onFixMessage', message.toJSON());
  }

  @OnFixMessage(MsgType.Logon)
  async onLogonMessage(session: Session, message: Message) {
    console.log('onLogonMessage', message.toString());
  }

  @OnConnected()
  async onConnected(session: Session) {
    console.log('onConnected');
  }

  @OnDisconnected()
  async onDisconnected(session: Session) {
    console.log('onDisconnected');
  }

  @OnLogout()
  async onLogout(session: Session, message: Message) {
    console.log('onLogout', message.toString);
  }
}
