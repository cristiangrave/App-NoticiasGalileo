import { CreateContactDto } from '../dtos/createContact.dto';
import { UpdateContactDto } from '../dtos/updateContact.dto';
import { Contacto } from '../entities/contacto.entity';
import { Repository } from 'typeorm';
import { Carrera } from 'src/carreras/entities/carrera.entity';
export declare class ContactsService {
    private readonly contactoRepository;
    private readonly carreraRepository;
    constructor(contactoRepository: Repository<Contacto>, carreraRepository: Repository<Carrera>);
    findAll(): Promise<Contacto[]>;
    findOne(idcontact: number): Promise<Contacto>;
    create(createContactDto: CreateContactDto): Promise<Contacto>;
    update(idcontact: number, updateContactDto: UpdateContactDto): Promise<Contacto>;
}
export { Contacto };
