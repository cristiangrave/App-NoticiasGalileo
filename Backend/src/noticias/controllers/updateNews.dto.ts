import { IsString, IsOptional } from "class-validator";

export class UpdateNewsDto {
  @IsString()
  @IsOptional()
  titulo: string;

  @IsString()
  @IsOptional()
  descripcion: string;

  @IsString()
  @IsOptional()
  carrera: string;

  @IsString()
  @IsOptional()
  imagen: string;

  @IsString()
  @IsOptional()
  fecha: string;

  @IsString()
  @IsOptional()
  estado: string;
}
