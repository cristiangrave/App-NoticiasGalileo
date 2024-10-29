import {
  Controller,
  Get,
  Param,
  NotFoundException,
  HttpStatus,
  HttpCode,
  Post,
  Body,
  Put,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { NoticiaService, Noticia } from '../services/noticias.service';
import { CreateNewsDto } from '../dtos/createNews.dto';
import { UpdateNewsDto } from '../dtos/updateNews.dto';
import { UploadService } from '../services/upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

/*nombre del enpoint */
@Controller('noticiasEstudiantes')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiaService, private readonly uploadService: UploadService) {}

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
   @UseInterceptors(FileInterceptor('imagen', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        // Generar un nombre único para la imagen
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        const fileExt = extname(file.originalname);  // Obtener la extensión del archivo original
        cb(null, `${randomName}${fileExt}`);  // Generar el nombre completo del archivo
      }
    })
   }))
   async create(@Body() createNewsDto: CreateNewsDto, @UploadedFile() file: Express.Multer.File){
     
    // Subir la imagen si es necesario
    const imagen = this.uploadService.uploadImage(file);
    
    // Creacion de la noticia con datos y la imagen convertida a String
    return this.noticiasService.create({...createNewsDto, imagen: imagen});
   }
 
   // Endpoint para Editar un Contacto
   @Put(':id')
   @UseInterceptors(FileInterceptor('imagen', {
    storage: diskStorage({
      destination: './uploads'
    })
   }))
   async updateNews(@Param('id') id: number, @Body() updateNewsDto:UpdateNewsDto, @UploadedFile() file?: Express.Multer.File) {

    let imagen;

    if(file){
      imagen = this.uploadService.uploadImage(file);
    }

     return this.noticiasService.update(id,{...updateNewsDto, ...(imagen && { imagen })})
   }
}
