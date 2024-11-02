import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateContactDto {
    @IsString()
    @IsOptional()
    nombre: string;

    @IsEmail()
    @IsOptional()
    correo: string;

    @IsNumber()
    @IsOptional()
    telefono: number;
      
    @IsNumber()
    @IsOptional()
    carrera: number;

    @IsString()
    @IsOptional()
    puesto: string;

    @IsString()
    @IsOptional()
    imagen: string;

}