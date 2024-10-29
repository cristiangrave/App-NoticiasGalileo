import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  readonly titulo: string;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsString()
  @IsNotEmpty()
  readonly carrera: string;

  @IsString()
  @IsOptional()
  readonly imagen: string;

  @IsString()
  @IsNotEmpty()
  readonly fecha: string;

  @IsString()
  @IsNotEmpty()
  readonly estado: string;
}
