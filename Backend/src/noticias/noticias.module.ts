import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NoticiasController } from "./controllers/news.controller";
import { NoticiaService } from "./services/noticias.service";
import { Noticia } from "./entities/noticia.entity";
import { Categoria } from "../categorias/entities/categoria.entity";
import { Carrera } from "src/carreras/entities/carrera.entity";
import { Usuario } from "src/users/entities/usuario.entity";
import { UploadService } from "./services/upload.service";

/** Module para controller y services */
@Module({
  imports: [TypeOrmModule.forFeature([Noticia, Categoria, Carrera, Usuario])],
  controllers: [NoticiasController],
  providers: [NoticiaService, UploadService],
})
export class NoticiasModule {}
