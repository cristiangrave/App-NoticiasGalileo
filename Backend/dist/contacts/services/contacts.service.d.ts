export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    carrera: string;
    puesto: string;
    imagen: string;
}
export declare class ContactsService {
    private contacts;
    findAll(): Contact[];
    findOne(id: number): Contact;
}
