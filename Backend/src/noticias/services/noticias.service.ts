import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateNewsDto } from "../controllers/createNews.dto";
import { UpdateNewsDto } from "../controllers/updateNews.dto";

export interface Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  carrera: string;
  imagen: string;
  fecha: string;
  estado: string;
}

@Injectable()
export class NoticiaService {
  private noticias: Noticia[] = [
    {
      id: 1,
      titulo: "Charla Ingenieria",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.",
      carrera: "Ingenieria En Sistemas",
      imagen: "imagen-noticia.png",
      fecha: "2024-10-25",
      estado: "activo",
    },
    {
      id: 2,
      titulo: "Charla Ingenieria",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.",
      carrera: "Ingenieria en Redes Computacionales",
      imagen: "imagen-noticia.png",
      fecha: "2024-10-22",
      estado: "activo",
    },
    {
      id: 3,
      titulo: "Charla Ingenieria",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.",
      carrera: "Ingenieria en Ciberseguridad",
      imagen: "imagen-noticia.png",
      fecha: "2024-10-28",
      estado: "activo",
    },
    {
      id: 4,
      titulo: "Charla Ingenieria",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.",
      carrera: "Ingenieria en Redes",
      imagen: "imagen-noticia.png",
      fecha: "14 de Octubre de 2024",
      estado: "activo",
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

  // Crear una noticia nueva
  create(createNewsDto: CreateNewsDto) {
    const newNews = { id: Date.now(), ...createNewsDto };
    this.noticias.push(newNews);
    return newNews;
  }

  // Editar un contacto existente
  update(id: number, updateNewsDto: UpdateNewsDto) {
    const newsIndex = this.noticias.findIndex((news) => news.id == id);

    // Si no encuentra el contacto por ID
    if (newsIndex == -1) {
      throw new NotFoundException(`Noticia con ID ${id} no encontrada`);
    }

    // Si encuentra el contacto con el ID y le Edita los datos
    this.noticias[newsIndex] = {
      ...this.noticias[newsIndex],
      ...updateNewsDto,
    };
    return this.noticias[newsIndex];
  }
}
