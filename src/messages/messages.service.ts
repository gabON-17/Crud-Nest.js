import { Injectable } from '@nestjs/common';
import { isDataView } from 'util/types';

@Injectable()
export class MessagesService {
    test(): string {
        return 'test service message'
    }

    get_id(id: object): object {
        return id["id"]
    }
}
