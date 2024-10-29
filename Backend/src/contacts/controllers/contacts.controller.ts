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
  UploadedFile,
} from '@nestjs/common';
import { ContactsService, Contact } from '../services/contacts.service';
import { CreateContactDto } from '../dtos/createContact.dto';
import { UpdateContactDto } from '../dtos/updateContact.dto';
import { UploadService } from '../services/upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';


@Controller('contactosEstudiantes')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService, private readonly uploadService: UploadService) {}

  // Endpoint para obtener todos los contactos
  @Get()
  @HttpCode(HttpStatus.OK) // Código de estado 200
  findAll(): { statusCode: number; message: string; data: Contact[] } {
    const contacts = this.contactsService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Contactos obtenidos exitosamente',
      data: contacts,
    };
  }

  // Endpoint para obtener un contacto por ID
  @Get(':id')
  findOne(@Param('id') id: string): {
    statusCode: number;
    message: string;
    data?: Contact;
  } {
    const contact = this.contactsService.findOne(+id);
    if (!contact) {
      throw new NotFoundException(
        `No se encontró información para el contacto con ID ${id}`,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'Contacto obtenido exitosamente',
      data: contact,
    };
  }

  // Endpoint para Crear un contacto
  // Ya con subida de imagen
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
    }, 
  ),
    fileFilter: (req, file, cb) => {
      if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        return new Error('Formato de imagen Invalido')
      } else {
        return console.log('Formato de imagen valido')
      }
  }
   }))
  async create(@Body() createContactDto: CreateContactDto, @UploadedFile() file: Express.Multer.File){
    
    // Subir la imagen si es necesario
    const imagen = this.uploadService.uploadImage(file);

    // Creacion del contacto con datos y la imagen convertida a String
    return this.contactsService.create({ ...createContactDto, imagen: imagen });
  }

  // Endpoint para Editar un Contacto
  @Put(':id')
  @UseInterceptors(FileInterceptor('imagen', {
    storage: diskStorage({
      destination: './uploads'
    })
   }))
  async updateContact(
    @Param('id') id: number, 
    @Body() updateContactDto:UpdateContactDto, 
    @UploadedFile() file?: Express.Multer.File) {


      let imagen; 
    // Se guarda una nueva imagen si se sube una nueva
    if(file){
       imagen = this.uploadService.uploadImage(file);
    }


    return this.contactsService.update(id, {
      ...updateContactDto, 
      ...(imagen && { imagen })})
  }

  // Endpoint para verificar el estado de visibilidad del contacto
  @Get(':id/visibility')
  async getContactVisibility(@Param('id') id: string){
    const isVisible = parseInt(id) % 2 == 0;
    return { isVisible };
  }


}
