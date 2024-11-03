import { Incripciones } from "src/inscripciones/inscripciones.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  idusuario: number;

  @Column()
  nombre: string;

  @Column({ nullable: false })
  contrasena: string;

  @Column()
  estado: string;

  @Column()
  carnet: number;

  @Column()
  tipousuario: string;

  @OneToMany(() => Incripciones, (inscripcion) => inscripcion.usuario)
  Incripciones: Incripciones[];
}
