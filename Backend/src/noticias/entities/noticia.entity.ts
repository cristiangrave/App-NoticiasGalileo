import { Column, Entity, JoinColumn, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria.entity";
import { Carrera } from "src/carreras/entities/carrera.entity";


@Entity('noticias')
export class Noticia {

    @PrimaryGeneratedColumn('uuid')
    idnoticia: string;

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

    @OneToMany(() => Categoria, (categoria) => categoria.noticias, { eager: true })
    categoria: Categoria[];

    @ManyToOne(() => Carrera, (carrera) => carrera.noticias)
    @JoinColumn({ name: 'idcarrera'})
    carrera: Carrera;

}