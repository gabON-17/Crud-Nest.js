import { Injectable } from '@nestjs/common';
import { Recado } from './entitys/recado.entity';

@Injectable()
export class MessagesService {
  private lastId: number = 1;
  private messages: Recado[] = [
    {
      id: 1,
      text: 'Texto teste',
      de: 'test1',
      para: 'test2',
      read: false,
      date: new Date(),
    },
  ];

  findAll() {
    return this.messages;
  }

  findOne(id: string): any {
    const message = this.messages.find((item) => item.id == +id);
    return message;
  }

  create(body: Recado): object {
    this.lastId++;
    const id = this.lastId;
    const newMessage: Recado = {
      id: id,
      text: body.text,
      de: body.de,
      para: body.para,
      read: body.read,
      date: body.date,
    };

    this.messages.push(newMessage);

    return newMessage;
  }

  update(id: string, body: Recado): Recado | string {
    const messageIndex: number = this.messages.findIndex(
      (item) => item.id === +id,
    );

    if (messageIndex >= 0) {
      const newMessage: Recado = {
        id: +id,
        text: body.text,
        de: body.de,
        para: body.para,
        read: body.read,
        date: body.date,
      };

      this.messages[messageIndex] = newMessage;
      return newMessage;
    } else {
      return 'id não encontrado, tente novamente';
    }
  }

  remove(id: string): object | string {
    const messageRemoveIndex: number = this.messages.findIndex(
      (item) => item.id === +id,
    );

    if (messageRemoveIndex >= 0) {
      this.messages.splice(messageRemoveIndex, 1);
      return this.messages[messageRemoveIndex];
    } else {
      return 'id não encontrado. Tente novamente';
    }
  }
}
