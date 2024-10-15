export interface Noticia {
    id: number;
    descripcion: string;
    carrera: string;
    imagen: string;
    fecha: string;
}
export declare class NoticiaService {
    private noticias;
    findAll(): Noticia[];
    findOne(id: number): Noticia;
}
