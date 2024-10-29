import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('contactos')
export class Contacto {

    @PrimaryColumn()
    idcontacto: number;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    telefono: number;

    @Column()
    carrera: string;

    @Column()
    puesto: string;

    @Column({ nullable: true })
    imagen: string;
}