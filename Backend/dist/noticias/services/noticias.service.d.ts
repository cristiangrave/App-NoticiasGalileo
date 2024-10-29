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
        estado: string;
        id: number;
    };
    update(id: number, updateNewsDto: UpdateNewsDto): Noticia;
}
