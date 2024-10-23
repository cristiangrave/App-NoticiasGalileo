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
} from "@nestjs/common";
import { ContactsService, Contact } from "../services/contacts.service";
import { CreateContactDto } from "./createContact.dto";
import { UpdateContactDto } from "./updateContact.dto";

@Controller("contactosEstudiantes")
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  // Endpoint para obtener todos los contactos
  @Get()
  @HttpCode(HttpStatus.OK) // Código de estado 200
  findAll(): { statusCode: number; message: string; data: Contact[] } {
    const contacts = this.contactsService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: "Contactos obtenidos exitosamente",
      data: contacts,
    };
  }

  // Endpoint para obtener un contacto por ID
  @Get(":id")
  findOne(@Param("id") id: string): {
    statusCode: number;
    message: string;
    data?: Contact;
  } {
    const contact = this.contactsService.findOne(+id);
    if (!contact) {
      throw new NotFoundException(
        `No se encontró información para el contacto con ID ${id}`
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: "Contacto obtenido exitosamente",
      data: contact,
    };
  }

  // Endpoint para Crear un contacto
  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }
  // Endpoint para Editar un Contacto
  @Put(":id")
  updateContact(
    @Param("id") id: number,
    @Body() updateContactDto: UpdateContactDto
  ) {
    return this.contactsService.update(id, updateContactDto);
  }
}
