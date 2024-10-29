import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";



export class UpdateContactDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsNumber()
  @IsOptional()
  phone: number;

  @IsString()
  @IsOptional()
  carrera: string;

  @IsString()
  @IsOptional()
  puesto: string;

  @IsString()
  @IsOptional()
  imagen: string;

  @IsString()
  @IsOptional()
  estado: string;
}

