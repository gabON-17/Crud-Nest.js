import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messageService: MessagesService) {}

    // Routes
    @Get('/')
    findAll() {
        return 'Retorna todos os recados';
    }

    @HttpCode(HttpStatus.OK) // Muda o código do http
    @Get('/:id')
    findOne(@Param() id: any) {

        return this.messageService.get_id(id);
    }

    @Post('/')
    create(@Body() body: any) {
        return body;
    }

    @Patch('/:id')
    update(@Param() id: string, @Body() body: any) {
        return {
            id, 
            ...body
        }
    }
}

// PATCH --> Utilizado para atualizar um recurso (Posso atualizar apenas uma parte do objeto)
// PUT   --> Obrigado a atualizar todos os recursos (Tem que atualizar todos os itens do objeto)