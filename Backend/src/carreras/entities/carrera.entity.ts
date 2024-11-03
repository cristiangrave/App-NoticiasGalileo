import { Contacto } from "src/contacts/entities/contacto.entity";
import { Noticia } from "src/noticias/entities/noticia.entity";
import { Usuario } from "src/users/entities/usuario.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("carreras")
export class Carrera {
  @PrimaryGeneratedColumn()
  idcarrera: number;

  @Column()
  nombre: string;

  @Column()
  estado: string;

  @Column()
  descripcion: string;
  /* One to Many una carrrea tiene mucha Noticias */
  @OneToMany(() => Noticia, (noticia) => noticia.carrera)
  noticias: Noticia[];
  /* OnetoMany : una carrera tiene muchas noticias  */
  @OneToMany(() => Contacto, (contacto) => contacto.carrera)
  contactos: Contacto[];
}
