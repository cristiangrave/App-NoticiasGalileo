import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Categoria, CategoriasService } from '../services/categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

    // Endpoint para obtener todas los carreras
    @Get()
    @HttpCode(HttpStatus.OK) // Código de estado 200
    async findAll(): Promise<{ statusCode: number; message: string; data: Categoria[] }> {
      const categorias = await this.categoriasService.findAll();
      return {
        statusCode: HttpStatus.OK,
        message: "Categorias obtenidas exitosamente",
        data: categorias,
      };
    }
}
