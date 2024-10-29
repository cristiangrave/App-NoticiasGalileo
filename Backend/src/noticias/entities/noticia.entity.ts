import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Categoria } from "./categoria.entity";


@Entity('noticias')
export class Noticia {

    @PrimaryColumn()
    idnoticia: number;

    @Column()
    idusuario: number;

    @Column()
    carrera: string;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    estado: string;

    @Column({ nullable: true })
    foto: string;

    @Column()
    fecha: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.noticias, { eager: true })
    @JoinColumn({ name: "categoria" })
    categoria: Categoria;

}