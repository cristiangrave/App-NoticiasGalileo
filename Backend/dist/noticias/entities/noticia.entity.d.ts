import { Categoria } from "./categoria.entity";
import { Carrera } from "src/carreras/entities/carrera.entity";
export declare class Noticia {
    idnoticia: string;
    titulo: string;
    descripcion: string;
    estado: string;
    foto: string;
    fecha: string;
    categoria: Categoria[];
    carrera: Carrera;
}
