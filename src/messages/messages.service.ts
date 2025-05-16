import { Injectable } from '@nestjs/common';
import { isDataView } from 'util/types';

@Injectable()
export class MessagesService {

    getId(id: object): object {
        return id
    }

    getMessages() {
        return 'Mensagens'
    }

    postMessage(mensage: object): string {
        return `Mensagem ${mensage["message"]} criada com sucesso!`
    }

    patchMenssage(id: number, mensage: object): object {
        return {
            id,
            ...mensage
        }
    }

    deleteMessage(id: number): string {
        return `Mensagens do usuário do ID ${id} deletado com sucesso`
    }
}
