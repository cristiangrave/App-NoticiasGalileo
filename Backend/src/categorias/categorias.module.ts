import { Module } from '@nestjs/common';
import { Categoria, CategoriasService } from './services/categorias.service';
import { CategoriasController } from './controllers/categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
