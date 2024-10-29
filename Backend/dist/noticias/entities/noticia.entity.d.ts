import { Categoria } from "./categoria.entity";
export declare class Noticia {
    idnoticia: number;
    idusuario: number;
    carrera: string;
    titulo: string;
    descripcion: string;
    estado: string;
    foto: string;
    fecha: string;
    categoria: Categoria;
}
