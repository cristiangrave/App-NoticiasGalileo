import { Carrera } from "src/carreras/entities/carrera.entity";
export declare class Usuario {
    idusuario: number;
    nombre: string;
    estado: string;
    carnet: number;
    tipousuario: string;
    carreras: Carrera[];
}
