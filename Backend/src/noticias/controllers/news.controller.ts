import {
  Controller,
  Get,
  Param,
  NotFoundException,
  HttpStatus,
  HttpCode,
  Post,
  Body,
  Put,
  UseInterceptors,
  UploadedFile,
  HttpException,
} from "@nestjs/common";
import { NoticiaService, Noticia } from "../services/noticias.service";
import { CreateNewsDto } from "../dtos/createNews.dto";
import { UpdateNewsDto } from "../dtos/updateNews.dto";
import { UploadService } from "../services/upload.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";

/*nombre del enpoint */
@Controller("noticiasEstudiantes")
export class NoticiasController {
  constructor(
    private readonly noticiasService: NoticiaService,
    private readonly uploadService: UploadService
  ) {}

  // Endpoint para obtener todos los contactos
  @Get()
  @HttpCode(HttpStatus.OK) // Código de estado 200
  async findAll(): Promise<{
    statusCode: number;
    message: string;
    data: Noticia[];
  }> {
    const noticias = await this.noticiasService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: "Noticias Obtenidas Exitosamente",
      data: noticias,
    };
  }

  // Endpoint para obtener un contacto por ID
  @Get(":id")
  async findOne(
    @Param("id") id: string
  ): Promise<{ statusCode: number; message: string; data?: Noticia }> {
    const noticia = await this.noticiasService.findOne(id);
    if (!noticia) {
      throw new NotFoundException(
        `No se encontró información para la Noticia con ID ${id}`
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: "Noticia obtenido exitosamente",
      data: noticia,
    };
  }

  // Endpoint para Crear una noticia
  @Post()
  @UseInterceptors(
    FileInterceptor("imagen", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          // Generar un nombre único para la imagen
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join("");
          const fileExt = extname(file.originalname); // Obtener la extensión del archivo original
          cb(null, `${randomName}${fileExt}`); // Generar el nombre completo del archivo
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          console.log("Formato de imagen inválido");
          cb(new Error("Formato de imagen inválido"), false); // Rechaza el archivo y devuelve un error
        } else {
          console.log("Formato de imagen válido");
          cb(null, true); // Acepta el archivo
        }
      },
    })
  )
  async create(
    @Body() createNewsDto: CreateNewsDto,
    @UploadedFile() file: Express.Multer.File
  ): Promise<{ statusCode: number; message: string; data: Noticia }> {
    try {
      // Subir la imagen si es necesario
      const hayImagen = this.uploadService.uploadImage(file);

      // Creacion del contacto con datos y la imagen convertida a String
      const noticia = await this.noticiasService.create({
        ...createNewsDto,
        imagen: hayImagen,
      });

      return {
        statusCode: HttpStatus.CREATED,
        message: "Noticia creada exitosamente",
        data: noticia,
      };
    } catch (error) {
      throw new HttpException(
        { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  // Endpoint para Editar un Contacto
  @Put(":id")
  @UseInterceptors(
    FileInterceptor("imagen", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join("");
          const fileExt = extname(file.originalname);
          cb(null, `${randomName}${fileExt}`);
        },
      }),
    })
  )
  async updateNews(
    @Param("id") id: string,
    @Body() updateNewsDto: UpdateNewsDto,
    @UploadedFile() file?: Express.Multer.File
  ): Promise<{ statusCode: number; message: string; data: Noticia }> {
    //Subir la imagen si se da
    let imagen;
    if (file) {
      imagen = this.uploadService.uploadImage(file);
    }

    const noticia = await this.noticiasService.update(id, {
      ...updateNewsDto,
      ...(imagen && { imagen }),
    });
    if (!noticia) {
      throw new NotFoundException(
        `No se encontró información para la Noticia con ID ${id}`
      );
    }

    return {
      statusCode: HttpStatus.OK,
      message: "Noticia actualizada exitosamente",
      data: noticia,
    };
  }

  // Endpoint para verificar el estado de visibilidad de la noticia
  @Get("estado/:estado")
  async findAllByEstado(@Param("estado") estado: string) {
    return await this.noticiasService.findByEstado(estado);
  }
}
