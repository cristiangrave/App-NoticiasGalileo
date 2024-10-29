import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateContactDto } from "../controllers/createContact.dto";
import { UpdateContactDto } from "../controllers/updateContact.dto";

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: number;
  carrera: string;
  puesto: string;
  imagen: string;
  estado: string;
}

@Injectable()
export class ContactsService {
  private contacts: Contact[] = [
    {
      id: 1,
      name: "Mariana Montenegro",
      email: "john@example.com",
      phone: 123456789,
      carrera: "Bases de Datos",
      puesto: "Docente",
      imagen: "docente1.png",
      estado: "activo",
    },
    {
      id: 2,
      name: "Carlos Herrera",
      email: "john@example.com",
      phone: 123456789,
      carrera: "Analisis de Datos ",
      puesto: "Docente",
      imagen: "docente2.png",
      estado: "activo",
    },
    {
      id: 3,
      name: "Marisa Gonzalez",
      email: "MariL@example.com",
      phone: 123456789,
      carrera: "Estadistica",
      puesto: "Docente",
      imagen: "docente3.png",
      estado: "activo",
    },
    {
      id: 4,
      name: "Edgar Rolando ",
      email: "Edgar@gmail.com",
      phone: 123456789,
      carrera: "Cloud Computing ",
      puesto: "Docente",
      imagen: "docente4.png",
      estado: "activo",
    },
    // Agrega más contactos simulados aquí
  ];

  // Obtener todos los contactos
  findAll(): Contact[] {
    return this.contacts;
  }

  // Obtener un contacto por ID
  findOne(id: number): Contact {
    return this.contacts.find((contact) => contact.id === id);
  }

  // Crear un contacto nuevo
  create(createContactDto: CreateContactDto) {
    const newContact = { id: Date.now(), ...createContactDto };
    this.contacts.push(newContact);
    return newContact;
  }

  // Editar un contacto existente
  update(id: number, updateContactDto: UpdateContactDto) {
    const contactIndex = this.contacts.findIndex((contact) => contact.id == id);
    // Si no encuentra el contacto por ID
    if (contactIndex == -1) {
      throw new NotFoundException(`Contacto con ID ${id} no encontrado`);
    }
    // Si encuentra el contacto con el ID y le Edita los datos
    this.contacts[contactIndex] = {
      ...this.contacts[contactIndex],
      ...updateContactDto,
    };
    return this.contacts[contactIndex];
  }
}
