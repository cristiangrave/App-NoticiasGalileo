import { ContactsService, Contact } from '../services/contacts.service';
import { CreateContactDto } from '../dtos/createContact.dto';
import { UpdateContactDto } from '../dtos/updateContact.dto';
import { UploadService } from '../services/upload.service';
export declare class ContactsController {
    private readonly contactsService;
    private readonly uploadService;
    constructor(contactsService: ContactsService, uploadService: UploadService);
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
    create(createContactDto: CreateContactDto, file: Express.Multer.File): Promise<{
        name: string;
        email: string;
        phone: number;
        carrera: string;
        puesto: string;
        imagen: string;
        id: number;
    }>;
    updateContact(id: number, updateContactDto: UpdateContactDto, file?: Express.Multer.File): Promise<Contact>;
    getContactVisibility(id: string): Promise<{
        isVisible: boolean;
    }>;
}
