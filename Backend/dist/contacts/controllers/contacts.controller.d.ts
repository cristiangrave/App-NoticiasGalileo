import { ContactsService, Contacto } from '../services/contacts.service';
import { CreateContactDto } from '../dtos/createContact.dto';
import { UpdateContactDto } from '../dtos/updateContact.dto';
import { UploadService } from '../services/upload.service';
export declare class ContactsController {
    private readonly contactsService;
    private readonly uploadService;
    constructor(contactsService: ContactsService, uploadService: UploadService);
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: Contacto[];
    }>;
    findOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data?: Contacto;
    }>;
    create(createContactDto: CreateContactDto, file: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        data: Contacto;
    }>;
    updateContact(id: number, updateContactDto: UpdateContactDto, file?: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        data: Contacto;
    }>;
    getContactVisibility(id: string): Promise<{
        isVisible: boolean;
    }>;
}
