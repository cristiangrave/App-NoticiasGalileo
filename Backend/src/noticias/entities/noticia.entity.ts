import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categorias/entities/categoria.entity";
import { Carrera } from "src/carreras/entities/carrera.entity";


@Entity('noticias')
export class Noticia {

    @PrimaryGeneratedColumn('uuid')
    idnoticia: string;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column({ default: 'activa '})
    estado: string;

    @Column({ nullable: true })
    foto: string;

    @Column()
    fecha: string;

    @ManyToMany(() => Categoria, (categoria) => categoria.noticia, { eager: true })
    @JoinTable()
    categoria: Categoria[];

    @ManyToOne(() => Carrera, (carrera) => carrera.noticia)
    @JoinColumn({ name: 'idcarrera'})
    carrera: Carrera;

}