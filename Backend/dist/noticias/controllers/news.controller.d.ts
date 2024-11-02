import { NoticiaService, Noticia } from '../services/noticias.service';
import { CreateNewsDto } from '../dtos/createNews.dto';
import { UpdateNewsDto } from '../dtos/updateNews.dto';
import { UploadService } from '../services/upload.service';
export declare class NoticiasController {
    private readonly noticiasService;
    private readonly uploadService;
    constructor(noticiasService: NoticiaService, uploadService: UploadService);
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: Noticia[];
    }>;
    findOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data?: Noticia;
    }>;
    create(createNewsDto: CreateNewsDto, file: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        data: Noticia;
    }>;
    updateNews(id: string, updateNewsDto: UpdateNewsDto, file?: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        data: Noticia;
    }>;
}
