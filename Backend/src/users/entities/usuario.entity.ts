import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {

    @PrimaryColumn()
    idusuario: number;

    @Column()
    nombre: string;

    @Column()
    estado: string;

    @Column()
    carnet: number;

    @Column()
    tipousuario: string;

    @Column()
    carrera: string;
}