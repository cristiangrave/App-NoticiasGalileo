import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Carrera } from 'src/carreras/entities/carrera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Carrera])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
