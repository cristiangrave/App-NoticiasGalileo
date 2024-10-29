import { NoticiaService, Noticia } from '../services/noticias.service';
import { CreateNewsDto } from './createNews.dto';
import { UpdateNewsDto } from './updateNews.dto';
export declare class NoticiasController {
    private readonly noticiasService;
    constructor(noticiasService: NoticiaService);
    findAll(): {
        statusCode: number;
        message: string;
        data: Noticia[];
    };
    findOne(id: string): {
        statusCode: number;
        message: string;
        data?: Noticia;
    };
    create(createNewsDto: CreateNewsDto): {
        titulo: string;
        descripcion: string;
        carrera: string;
        imagen: string;
        fecha: string;
        id: number;
    };
    updateNews(id: number, updateNewsDto: UpdateNewsDto): Noticia;
}
