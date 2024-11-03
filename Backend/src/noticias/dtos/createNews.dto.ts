import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class CreateNewsDto {

    @IsString()
    @IsNotEmpty()
    readonly titulo: string;

    @IsString()
    @IsNotEmpty()
    readonly descripcion: string;
      
    @IsInt()
    @IsNotEmpty()
    readonly carrera: number;

    @IsString()
    @IsOptional()
    readonly imagen: string;

    @IsString()
    @IsNotEmpty()
    readonly fecha: string;

    @IsString()
    @IsNotEmpty()
    readonly estado: string;

    @IsInt()
    @IsNotEmpty()
    readonly categoria: number;

}