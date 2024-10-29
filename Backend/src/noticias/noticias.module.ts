import { Module } from "@nestjs/common";
import { NoticiasController } from "./controllers/news.controller";
import { NoticiaService } from "./services/noticias.service";

/** Module para controller y services */
@Module({
  controllers: [NoticiasController],
  providers: [NoticiaService],
})
export class NoticiasModule {}
