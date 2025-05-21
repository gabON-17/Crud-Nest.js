import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Recado } from './entitys/recado.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly mensageService: MessagesService) {}

  @Get('/')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Query() page: number) {
    // const { limit = 10, offset = 0 }: any = page;
    const coments: object = this.mensageService.findAll();
    return coments;
  }

  @Get('/:id')
  findOne(@Param('id') id: string): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: any = this.mensageService.findOne(id);
    return data;
  }

  @Post('/')
  create(@Body() body: Recado) {
    const message: object = this.mensageService.create(body);
    return message;
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: Recado) {
    const message: Recado | string = this.mensageService.update(id, body);
    return message;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    const status: object | string = this.mensageService.remove(id);
    return status;
  }
}
