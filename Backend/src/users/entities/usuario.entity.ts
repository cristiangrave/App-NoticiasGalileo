import { Carrera } from "src/carreras/entities/carrera.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn()
    idusuario: number;

    @Column()
    nombre: string;

    @Column()
    estado: string;

    @Column()
    carnet: number;

    @Column()
    tipousuario: string;

    @OneToMany(() => Carrera, (carrera) => carrera.usuario)
    carrera: Carrera[];
}