import { IsString, IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateContactDto {
    
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsEmail()
    @IsNotEmpty()
    readonly correo: string;

    @IsNumber()
    @IsNotEmpty()
    readonly telefono: number;
      
    @IsNumber()
    @IsNotEmpty()
    readonly carrera: number;

    @IsString()
    @IsNotEmpty()
    readonly puesto: string;

    @IsString()
    @IsOptional()
    readonly imagen: string;

}