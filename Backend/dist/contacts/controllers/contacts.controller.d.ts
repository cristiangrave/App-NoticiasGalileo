import { ContactsService, Contact } from '../services/contacts.service';
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
}
