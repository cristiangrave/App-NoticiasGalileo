import { NoticiaService, Noticia } from '../services/noticias.service';
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
}
