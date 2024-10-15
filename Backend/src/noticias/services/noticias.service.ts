import { Injectable } from '@nestjs/common';

export interface Noticia {
  id: number;
  descripcion: string;
  carrera: string;
  imagen: string;
  fecha: string;
}

@Injectable()
export class NoticiaService {
  private noticias: Noticia[] = [
    {
      id: 1,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.',
      carrera: 'Ingenieria En Sistemas',
      imagen: 'imagen-noticia.png',
      fecha: '14 de Octubre de 2024',
    },
    {
      id: 2,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.',
      carrera: 'Ingenieria en Redes Computacionales',
      imagen: 'imagen-noticia.png',
      fecha: '14 de Octubre de 2024',
    },
    {
      id: 3,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.',
      carrera: 'Ingenieria en Ciberseguridad',
      imagen: 'imagen-noticia.png',
      fecha: '14 de Octubre de 2024',
    },
    {
      id: 4,
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.',
      carrera: 'Ingenieria en Redes',
      imagen: 'imagen-noticia.png',
      fecha: '14 de Octubre de 2024',
    },
    // Agrega más contactos simulados aquí
  ];

  // Obtener todos los contactos
  findAll(): Noticia[] {
    return this.noticias;
  }

  // Obtener un contacto por ID
  findOne(id: number): Noticia {
    return this.noticias.find((contact) => contact.id === id);
  }
}
