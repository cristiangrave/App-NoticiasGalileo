import {
  Controller,
  Get,
  Param,
  NotFoundException,
  HttpStatus,
  HttpCode,
  Post,
  Body,
  Put
} from '@nestjs/common';
import { NoticiaService, Noticia } from '../services/noticias.service';
import { CreateNewsDto } from './createNews.dto';
import { UpdateNewsDto } from './updateNews.dto';

/*nombre del enpoint */
@Controller('noticiasEstudiantes')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiaService) {}

  // Endpoint para obtener todos los contactos
  @Get()
  @HttpCode(HttpStatus.OK) // Código de estado 200
  findAll(): { statusCode: number; message: string; data: Noticia[] } {
    const noticias = this.noticiasService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Noticias Obtenidas Exitosamente',
      data: noticias,
    };
  }

  // Endpoint para obtener un contacto por ID
  @Get(':id')
  findOne(@Param('id') id: string): {
    statusCode: number;
    message: string;
    data?: Noticia;
  } {
    const noticia = this.noticiasService.findOne(+id);
    if (!noticia) {
      throw new NotFoundException(
        `No se encontró información para la Noticia con ID ${id}`,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'Noticia obtenido exitosamente',
      data: noticia,
    };
  }

   // Endpoint para Crear un contacto
   @Post()
   create(@Body() createNewsDto: CreateNewsDto){
     return this.noticiasService.create(createNewsDto);
   }
 
   // Endpoint para Editar un Contacto
   @Put(':id')
   updateNews(@Param('id') id: number, @Body() updateNewsDto:UpdateNewsDto) {
     return this.noticiasService.update(id, updateNewsDto)
   }
}
