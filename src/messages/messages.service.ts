import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    test(): string {
        return 'test service message'
    }

    get_id(id): string {
        return  `Id pego é ${id}`
    }
}
