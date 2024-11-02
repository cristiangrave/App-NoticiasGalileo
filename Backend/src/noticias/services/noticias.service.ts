import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNewsDto } from '../dtos/createNews.dto';
import { UpdateNewsDto } from '../dtos/updateNews.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Noticia } from '../entities/noticia.entity';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';
import { Carrera } from 'src/carreras/entities/carrera.entity';

@Injectable()
export class NoticiaService {
  constructor( 
    @InjectRepository(Noticia)
    private readonly noticiaRepository: Repository<Noticia>,

    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,

    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>,
  ) {}

  // Obtener todos los contactos
  async findAll(): Promise<Noticia[]> {
    return this.noticiaRepository.find();
  }

  // Obtener un contacto por ID
  async findOne(idnoticia: string): Promise<Noticia> {
    const noticia = await this.noticiaRepository.findOne({
      where: {idnoticia},
    });

    if(!noticia) {
      throw new NotFoundException(`Noticia con ID ${idnoticia} no encontrada`);
    }

    return noticia;
  }

   // Crear una noticia nueva
   async create(createNewsDto: CreateNewsDto): Promise<Noticia> {
    // Obtener las entidades relacionadas de Categoria y Carrera
    const categoria = await this.categoriaRepository.findOne({ where: { idcategoria: createNewsDto.categoria }})
    const carrera = await this.carreraRepository.findOne({ where: { idcarrera: createNewsDto.carrera } });

    if (!categoria) {
      throw new NotFoundException(`Categoria con ID ${createNewsDto.categoria} no encontrada`);
    }
    if (!carrera) {
      throw new NotFoundException(`Carrera con ID ${createNewsDto.carrera} no encontrada`);
    }

    // Crear y asignar los valores a la noticia
    const newNews = this.noticiaRepository.create({
      ...createNewsDto, categoria: [categoria], carrera: carrera
    });

    return this.noticiaRepository.save(newNews);
  }

  // Editar un contacto existente
  async update(idnoticia: string, updateNewsDto: UpdateNewsDto): Promise<Noticia>{
    const editNew = await this.findOne(idnoticia);
    
    if (!editNew) {
      throw new NotFoundException(`Noticia con ID ${idnoticia} no encontrada`);
    }

    // Obtener entidades actualizadas si es necesario
    if (updateNewsDto.categoria) {
      const categoria = await this.categoriaRepository.findOne({ where: { idcategoria: updateNewsDto.categoria } });
      if (!categoria) {
        throw new NotFoundException(`Categoria con ID ${updateNewsDto.categoria} no encontrada`);
      }
      editNew.categoria = [categoria];
    }

    if (updateNewsDto.carrera) {
      const carrera = await this.carreraRepository.findOne({ where: { idcarrera: updateNewsDto.carrera } });
      if (!carrera) {
        throw new NotFoundException(`Carrera con ID ${updateNewsDto.carrera} no encontrada`);
      }
      editNew.carrera = carrera;
    }

    // Si encuentra el contacto con el ID y le Edita los datos
    Object.assign(editNew, updateNewsDto);
    return await this.noticiaRepository.save(editNew);
  }

}

export { Noticia }