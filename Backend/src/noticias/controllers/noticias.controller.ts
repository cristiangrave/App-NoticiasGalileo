import {
  Controller,
  Get,
  Param,
  NotFoundException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { NoticiaService, Noticia } from '../services/noticias.service';
/*nombre del enpoint */
@Controller('noticiasEstudiantes')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiaService) {}

  // Endpoint para obtener todos los contactos
  @Get()
  @HttpCode(HttpStatus.OK) // Código de estado 200
  findAll(): { statusCode: number; message: string; data: Noticia[] } {
    const contacts = this.noticiasService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Noticias Obtenidas Exitosamente',
      data: contacts,
    };
  }

  // Endpoint para obtener un contacto por ID
  @Get(':id')
  findOne(@Param('id') id: string): {
    statusCode: number;
    message: string;
    data?: Noticia;
  } {
    const contact = this.noticiasService.findOne(+id);
    if (!contact) {
      throw new NotFoundException(
        `No se encontró información para la Notica con ID ${id}`,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'Noticia obtenido exitosamente',
      data: contact,
    };
  }
}
