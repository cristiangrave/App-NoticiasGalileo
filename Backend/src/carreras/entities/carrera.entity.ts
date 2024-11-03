import { Contacto } from "src/contacts/entities/contacto.entity";
import { Noticia } from "src/noticias/entities/noticia.entity";
import { Usuario } from "src/users/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('carreras')
export class Carrera {

    @PrimaryGeneratedColumn()
    idcarrera: number;

    @Column()
    nombre: string;

    @Column()
    estado: string;

    @Column()
    descripcion: string;

    @ManyToOne(() => Usuario, (usuario) => usuario.carreras, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'idusuario' })  // Nombre de la columna de clave foránea
    usuario: Usuario;

    @OneToMany(() => Noticia, (noticia) => noticia.carrera)
    noticias: Noticia[];

    @OneToMany(() => Contacto, (contacto) => contacto.carrera)
    contactos: Contacto[];

}