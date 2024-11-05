import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from '../entities/carrera.entity';
@Injectable()
export class CarrerasService {
  constructor( 
    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>) {}

  // Obtener todas las carreras
  async findAll(): Promise<Carrera[]> {
    return this.carreraRepository.find();
  }
}

export { Carrera }