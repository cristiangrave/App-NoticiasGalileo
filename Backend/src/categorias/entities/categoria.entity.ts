import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinColumn, JoinTable} from "typeorm";
import { Noticia } from "../../noticias/entities/noticia.entity";

@Entity('categorias')
export class Categoria {

    @PrimaryGeneratedColumn()
    idcategoria: number;

    @Column({unique: true})
    nombre: string;

    @Column({ nullable: true })
    descripcion: string;

    @ManyToMany(() => Noticia, (noticia) => noticia.categoria)
    noticia: Noticia[];

}