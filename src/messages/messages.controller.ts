import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
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

        return this.messageService.getId(id);
    }

    @Post('/')
    create(@Body() body: any) {
        return this.messageService.postMessage(body);
    }

    @Patch('/:id')
    update(@Param("id") id: number, @Body() body: any) {
        return this.messageService.patchMenssage(id, body)
    }

    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.messageService.deleteMessage(id)
    }
}

// PATCH --> Utilizado para atualizar um recurso (Posso atualizar apenas uma parte do objeto)
// PUT   --> Obrigado a atualizar todos os recursos (Tem que atualizar todos os itens do objeto)