import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from 'src/carreras/entities/carrera.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Carrera])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
