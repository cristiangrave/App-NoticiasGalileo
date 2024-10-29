import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Noticia } from "./noticia.entity";

@Entity('categorias')
export class Categoria {

    @PrimaryColumn()
    idcategoria: number;

    @Column({unique: true})
    nombre: string;

    @Column()
    descripcion: string;

    @OneToMany(() => Noticia, (noticia) => noticia.categoria)
    noticias: Noticia[];

}