import { Module } from '@nestjs/common';
import { NoticiasController } from './controllers/noticias.controller';
import { NoticiaService } from './services/noticias.service';

/**hola este es el mismo archivo  */
@Module({
  controllers: [NoticiasController],
  providers: [NoticiaService],
})
export class NoticiasModule {}
