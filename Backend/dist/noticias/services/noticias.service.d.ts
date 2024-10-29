import { CreateNewsDto } from '../dtos/createNews.dto';
import { UpdateNewsDto } from '../dtos/updateNews.dto';
export interface Noticia {
    id: number;
    titulo: string;
    descripcion: string;
    carrera: string;
    imagen: string;
    fecha: string;
}
export declare class NoticiaService {
    private noticias;
    findAll(): Noticia[];
    findOne(id: number): Noticia;
    create(createNewsDto: CreateNewsDto): {
        titulo: string;
        descripcion: string;
        carrera: string;
        imagen: string;
        fecha: string;
        id: number;
    };
    update(id: number, updateNewsDto: UpdateNewsDto): Noticia;
}
