import { Module } from '@nestjs/common';
import { NoticiasController } from './controllers/news.controller';
import { NoticiaService } from './services/noticias.service';
import { UploadService } from './services/upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noticia } from './entities/noticia.entity';
import { Categoria } from './entities/categoria.entity';
import { Carrera } from 'src/carreras/entities/carrera.entity';
import { Usuario } from 'src/users/entities/usuario.entity';

/**hola este es el mismo archivo  */
@Module({
  imports: [TypeOrmModule.forFeature([Noticia, Categoria, Carrera, Usuario])],
  controllers: [NoticiasController],
  providers: [NoticiaService, UploadService],
})
export class NoticiasModule {}
