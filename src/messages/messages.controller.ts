import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messageService: MessagesService) {}

    // Routes
    @Get('/')
    findAll() {
        return 'Retorna todos os recados'
    }

    @Get('/:id')
    findOne(@Param('id') id: number) {
        return this.messageService.get_id(id)
    }
}
