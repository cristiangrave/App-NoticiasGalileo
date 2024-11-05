import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn} from "typeorm";
import { Noticia } from "../../noticias/entities/noticia.entity";

@Entity('categorias')
export class Categoria {

    @PrimaryGeneratedColumn()
    idcategoria: number;

    @Column({unique: true})
    nombre: string;

    @Column({ nullable: true })
    descripcion: string;

    @ManyToOne(() => Noticia, (noticia) => noticia.categoria)
    @JoinColumn({ name: "idnoticia" })
    noticia: Noticia;

}