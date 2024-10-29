import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('carreras')
export class Carrera {

    @PrimaryColumn()
    idcarrera: number;

    @Column()
    nombre: string;

    @Column()
    estado: string;

    @Column()
    descripcion: string;

}