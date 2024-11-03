import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateNewsDto {
    
    @IsString()
    @IsOptional()
    titulo: string;

    @IsString()
    @IsOptional()
    descripcion: string;
      
    @IsNumber()
    @IsOptional()
    carrera: number;

    @IsString()
    @IsOptional()
    imagen: string;

    @IsString()
    @IsOptional()
    fecha: string;

    @IsNumber()
    @IsOptional()
    categoria: number;
}