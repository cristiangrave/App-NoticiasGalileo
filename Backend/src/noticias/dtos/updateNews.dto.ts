import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateNewsDto {
    
    @IsString()
    @IsOptional()
    titulo: string;

    @IsString()
    @IsOptional()
    descripcion: string;
      
    @IsInt()
    @IsOptional()
    carrera: number;

    @IsString()
    @IsOptional()
    imagen: string;

    @IsString()
    @IsOptional()
    fecha: string;

    @IsInt()
    @IsOptional()
    categoria: number;
}