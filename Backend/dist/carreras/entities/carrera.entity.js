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
exports.Carrera = void 0;
const contacto_entity_1 = require("../../contacts/entities/contacto.entity");
const noticia_entity_1 = require("../../noticias/entities/noticia.entity");
const usuario_entity_1 = require("../../users/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Carrera = class Carrera {
};
exports.Carrera = Carrera;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Carrera.prototype, "idcarrera", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrera.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrera.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrera.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.carreras, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'idusuario' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Carrera.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => noticia_entity_1.Noticia, (noticia) => noticia.carrera),
    __metadata("design:type", Array)
], Carrera.prototype, "noticias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contacto_entity_1.Contacto, (contacto) => contacto.carrera),
    __metadata("design:type", Array)
], Carrera.prototype, "contactos", void 0);
exports.Carrera = Carrera = __decorate([
    (0, typeorm_1.Entity)('carreras')
], Carrera);
//# sourceMappingURL=carrera.entity.js.map