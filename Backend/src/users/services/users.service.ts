import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";
import { Usuario } from "../entities/usuario.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ) {}

  // Obtener un usuario por ID
  async findOne(carnet: number): Promise<Usuario> {
    console.log(" carnet que vienen del auth ", carnet);
    const user = await this.usuarioRepository.findOne({
      where: { carnet: carnet },
    });
    /* Console para que ver  que es lo que encuentra el findOne */
    console.log(user);
    if (!user) {
      throw new NotFoundException(`contact con ID ${carnet} no encontrada`);
    }

    return user;
  }
}
