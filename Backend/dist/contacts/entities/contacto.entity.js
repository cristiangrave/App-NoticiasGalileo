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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacto = void 0;
const carrera_entity_1 = require("../../carreras/entities/carrera.entity");
const typeorm_1 = require("typeorm");
let Contacto = class Contacto {
};
exports.Contacto = Contacto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Contacto.prototype, "idcontacto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contacto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contacto.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Contacto.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contacto.prototype, "puesto", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Contacto.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrera_entity_1.Carrera, (carrera) => carrera.contactos),
    (0, typeorm_1.JoinColumn)({ name: 'idcarrera' }),
    __metadata("design:type", carrera_entity_1.Carrera)
], Contacto.prototype, "carrera", void 0);
exports.Contacto = Contacto = __decorate([
    (0, typeorm_1.Entity)('contactos')
], Contacto);
//# sourceMappingURL=contacto.entity.js.map