"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
let ContactsService = class ContactsService {
    constructor() {
        this.contacts = [
            {
                id: 1,
                name: "Mariana Montenegro",
                email: "john@example.com",
                phone: 123456789,
                carrera: "Bases de Datos",
                puesto: "Docente",
                imagen: "docente1.png",
            },
            {
                id: 2,
                name: "Carlos Herrera",
                email: "john@example.com",
                phone: 123456789,
                carrera: "Analisis de Datos ",
                puesto: "Docente",
                imagen: "docente2.png",
            },
            {
                id: 3,
                name: "Marisa Gonzalez",
                email: "MariL@example.com",
                phone: 123456789,
                carrera: "Estadistica",
                puesto: "Docente",
                imagen: "docente3.png",
            },
            {
                id: 4,
                name: "Edgar Rolando ",
                email: "Edgar@gmail.com",
                phone: 123456789,
                carrera: "Cloud Computing ",
                puesto: "Docente",
                imagen: "docente4.png",
            },
        ];
    }
    findAll() {
        return this.contacts;
    }
    findOne(id) {
        return this.contacts.find((contact) => contact.id === id);
    }
    create(createContactDto) {
        const newContact = { id: Date.now(), ...createContactDto };
        this.contacts.push(newContact);
        return newContact;
    }
    update(id, updateContactDto) {
        const contactIndex = this.contacts.findIndex((contact) => contact.id == id);
        if (contactIndex == -1) {
            throw new common_1.NotFoundException(`Contacto con ID ${id} no encontrado`);
        }
        this.contacts[contactIndex] = {
            ...this.contacts[contactIndex],
            ...updateContactDto,
        };
        return this.contacts[contactIndex];
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)()
], ContactsService);
//# sourceMappingURL=contacts.service.js.map