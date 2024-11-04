import { Carrera } from "src/carreras/entities/carrera.entity";
import { Usuario } from "src/users/entities/usuario.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("incripciones")
export class Incripciones {
  @PrimaryGeneratedColumn()
  idInscripcion: number;
  /* muchos usuario pueden tener muchar inscripciones */
  @ManyToOne(() => Usuario, (usuario) => usuario.idusuario, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "idusuario" }) // Nombre de la columna de clave foránea
  usuario: Usuario;
  @ManyToOne(() => Carrera, (carrera) => carrera.idcarrera, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "idcarrera" }) // Nombre de la columna de clave foránea
  carrera: Carrera;

  /*Este estado lo creo por si queremos dar de baja a un estudiante en una carrera */
  @Column()
  estado: string;
  /* tambien prodriamos guardar la fecha de inscripcion pero eso quedaria para la proxima */
}
