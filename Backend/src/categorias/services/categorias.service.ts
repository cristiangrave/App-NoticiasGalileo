import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from '../entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {

  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  // Retorna todas las cateogiras
  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }
}
export { Categoria }