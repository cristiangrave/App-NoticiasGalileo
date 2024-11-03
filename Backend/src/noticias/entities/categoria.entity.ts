import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn} from "typeorm";
import { Noticia } from "./noticia.entity";

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
    noticias: Noticia;

}