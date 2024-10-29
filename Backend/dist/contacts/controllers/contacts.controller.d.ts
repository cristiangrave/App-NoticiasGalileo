import { ContactsService, Contact } from "../services/contacts.service";
import { CreateContactDto } from "./createContact.dto";
import { UpdateContactDto } from "./updateContact.dto";
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    findAll(): {
        statusCode: number;
        message: string;
        data: Contact[];
    };
    findOne(id: string): {
        statusCode: number;
        message: string;
        data?: Contact;
    };
    create(createContactDto: CreateContactDto): {
        name: string;
        email: string;
        phone: number;
        carrera: string;
        puesto: string;
        imagen: string;
        id: number;
    };
    updateContact(id: number, updateContactDto: UpdateContactDto): Contact;
}
