import { CreateNewsDto } from '../dtos/createNews.dto';
import { UpdateNewsDto } from '../dtos/updateNews.dto';
import { Noticia } from '../entities/noticia.entity';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';
import { Carrera } from 'src/carreras/entities/carrera.entity';
export declare class NoticiaService {
    private readonly noticiaRepository;
    private readonly categoriaRepository;
    private readonly carreraRepository;
    constructor(noticiaRepository: Repository<Noticia>, categoriaRepository: Repository<Categoria>, carreraRepository: Repository<Carrera>);
    findAll(): Promise<Noticia[]>;
    findOne(idnoticia: string): Promise<Noticia>;
    create(createNewsDto: CreateNewsDto): Promise<Noticia>;
    update(idnoticia: string, updateNewsDto: UpdateNewsDto): Promise<Noticia>;
}
export { Noticia };
