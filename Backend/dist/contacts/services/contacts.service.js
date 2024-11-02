"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacto = exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const contacto_entity_1 = require("../entities/contacto.entity");
Object.defineProperty(exports, "Contacto", { enumerable: true, get: function () { return contacto_entity_1.Contacto; } });
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const carrera_entity_1 = require("../../carreras/entities/carrera.entity");
let ContactsService = class ContactsService {
    constructor(contactoRepository, carreraRepository) {
        this.contactoRepository = contactoRepository;
        this.carreraRepository = carreraRepository;
    }
    async findAll() {
        return this.contactoRepository.find();
    }
    async findOne(idcontact) {
        const contact = await this.contactoRepository.findOne({
            where: { idcontacto: idcontact },
        });
        if (!contact) {
            throw new common_1.NotFoundException(`contact con ID ${idcontact} no encontrada`);
        }
        return contact;
    }
    async create(createContactDto) {
        const carrera = await this.carreraRepository.findOne({ where: { idcarrera: createContactDto.carrera } });
        if (!carrera) {
            throw new common_1.NotFoundException(`Carrera con ID ${createContactDto.carrera} no encontrada`);
        }
        const newContact = this.contactoRepository.create({
            ...createContactDto, carrera: carrera
        });
        return this.contactoRepository.save(newContact);
    }
    async update(idcontact, updateContactDto) {
        const editContact = await this.findOne(idcontact);
        if (!editContact) {
            throw new common_1.NotFoundException(`contact con ID ${idcontact} no encontrada`);
        }
        if (updateContactDto.carrera) {
            const carrera = await this.carreraRepository.findOne({ where: { idcarrera: updateContactDto.carrera } });
            if (!carrera) {
                throw new common_1.NotFoundException(`Carrera con ID ${updateContactDto.carrera} no encontrada`);
            }
            editContact.carrera = carrera;
        }
        Object.assign(editContact, updateContactDto);
        return await this.contactoRepository.save(editContact);
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contacto_entity_1.Contacto)),
    __param(1, (0, typeorm_1.InjectRepository)(carrera_entity_1.Carrera)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ContactsService);
//# sourceMappingURL=contacts.service.js.map