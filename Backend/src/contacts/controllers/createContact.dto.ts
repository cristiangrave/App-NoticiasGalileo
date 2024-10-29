import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from "class-validator";

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNumber()
  @IsNotEmpty()
  readonly phone: number;

  @IsString()
  @IsNotEmpty()
  readonly carrera: string;

  @IsString()
  @IsNotEmpty()
  readonly puesto: string;

  @IsString()
  @IsOptional()
  readonly imagen: string;

  @IsString()
  @IsOptional()
  readonly estado: string;
}
