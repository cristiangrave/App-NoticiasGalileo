import { NoticiaService, Noticia } from '../services/noticias.service';
import { CreateNewsDto } from '../dtos/createNews.dto';
import { UpdateNewsDto } from '../dtos/updateNews.dto';
import { UploadService } from '../services/upload.service';
export declare class NoticiasController {
    private readonly noticiasService;
    private readonly uploadService;
    constructor(noticiasService: NoticiaService, uploadService: UploadService);
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
    create(createNewsDto: CreateNewsDto, file: Express.Multer.File): Promise<{
        titulo: string;
        descripcion: string;
        carrera: string;
        imagen: string;
        fecha: string;
        id: number;
    }>;
    updateNews(id: number, updateNewsDto: UpdateNewsDto, file?: Express.Multer.File): Promise<Noticia>;
}
