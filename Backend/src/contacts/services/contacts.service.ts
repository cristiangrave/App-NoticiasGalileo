import { Injectable } from '@nestjs/common';

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  carrera: string;
  puesto: string;
  imagen: string;
}

@Injectable()
export class ContactsService {
  private contacts: Contact[] = [
    {
      id: 1,
      name: 'Mariana Montenegro',
      email: 'john@example.com',
      phone: '123456789',
      carrera: 'Bases de Datos',
      puesto: 'Docente',
      imagen: 'docente1.png',
    },
    {
      id: 2,
      name: 'Carlos Herrera',
      email: 'john@example.com',
      phone: '123456789',
      carrera: 'Analisis de Datos ',
      puesto: 'Docente',
      imagen: 'docente2.png',
    },
    {
      id: 3,
      name: 'Marisa Gonzalez',
      email: 'MariL@example.com',
      phone: '123456789',
      carrera: 'Estadistica',
      puesto: 'd',
      imagen: 'docente3.png',
    },
    {
      id: 4,
      name: 'Edgar Rolando ',
      email: 'Edgar@gmail.com',
      phone: '123456789',
      carrera: 'Cloud Computing ',
      puesto: 'Docente',
      imagen: 'docente4.png',
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
}
