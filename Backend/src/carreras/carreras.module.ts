import { Module } from "@nestjs/common";
import { CarrerasController } from "./controller/carreras.controller";
import { Carrera, CarrerasService } from "./services/carreras.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Carrera])],
    controllers: [CarrerasController],
    providers: [CarrerasService],
})
export class CarrerasModule{}