import { Carrera } from "src/carreras/entities/carrera.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";


@Entity('contactos')
export class Contacto {

    @PrimaryGeneratedColumn()
    idcontacto: number;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    telefono: number;

    @Column()
    puesto: string;

    @Column({ nullable: true })
    imagen: string;

    @ManyToOne(() => Carrera, (carrera) => carrera.contactos)
    @JoinColumn({ name: 'idcarrera'})
    carrera: Carrera;
}