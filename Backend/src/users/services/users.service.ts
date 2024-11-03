import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";
import { Usuario } from "../entities/usuario.entity";

@Injectable()
export class UsersService {
  constructor( 
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  // Obtener un usuario por ID
  async findOne(usuario: string): Promise<Usuario> {
    const user = await this.usuarioRepository.findOne({
      where: {nombre: usuario},
    });

    if(!user) {
      throw new NotFoundException(`contact con ID ${usuario} no encontrada`);
    }

    return user;
  }
}
