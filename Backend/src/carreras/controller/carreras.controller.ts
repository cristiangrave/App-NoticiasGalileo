import { Controller, Get, HttpStatus, HttpCode } from "@nestjs/common";
import { CarrerasService } from "../services/carreras.service";
import { Carrera } from "../entities/carrera.entity";

@Controller("carreras")
export class CarrerasController {
  constructor(private readonly carrerasService: CarrerasService) {}

  // Endpoint para obtener todas los carreras
  @Get()
  @HttpCode(HttpStatus.OK) // Código de estado 200
  async findAll(): Promise<{
    statusCode: number;
    message: string;
    data: Carrera[];
  }> {
    const carreras = await this.carrerasService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: "Carreras obtenidas exitosamente",
      data: carreras,
    };
  }
}
