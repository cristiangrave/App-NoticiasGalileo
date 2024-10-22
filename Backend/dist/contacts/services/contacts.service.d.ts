import { CreateContactDto } from '../controllers/createContact.dto';
import { UpdateContactDto } from '../controllers/updateContact.dto';
export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: number;
    carrera: string;
    puesto: string;
    imagen: string;
}
export declare class ContactsService {
    private contacts;
    findAll(): Contact[];
    findOne(id: number): Contact;
    create(createContactDto: CreateContactDto): {
        name: string;
        email: string;
        phone: number;
        carrera: string;
        puesto: string;
        imagen: string;
        id: number;
    };
    update(id: number, updateContactDto: UpdateContactDto): Contact;
}
