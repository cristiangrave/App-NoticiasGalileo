import { Contacto } from "src/contacts/entities/contacto.entity";
import { Noticia } from "src/noticias/entities/noticia.entity";
import { Usuario } from "src/users/entities/usuario.entity";
export declare class Carrera {
    idcarrera: number;
    nombre: string;
    estado: string;
    descripcion: string;
    usuario: Usuario;
    noticias: Noticia[];
    contactos: Contacto[];
}
