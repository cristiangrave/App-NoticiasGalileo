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
exports.Noticia = void 0;
const typeorm_1 = require("typeorm");
const categoria_entity_1 = require("./categoria.entity");
const carrera_entity_1 = require("../../carreras/entities/carrera.entity");
let Noticia = class Noticia {
};
exports.Noticia = Noticia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Noticia.prototype, "idnoticia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Noticia.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Noticia.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Noticia.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Noticia.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Noticia.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => categoria_entity_1.Categoria, (categoria) => categoria.noticias, { eager: true }),
    __metadata("design:type", Array)
], Noticia.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrera_entity_1.Carrera, (carrera) => carrera.noticias),
    (0, typeorm_1.JoinColumn)({ name: 'idcarrera' }),
    __metadata("design:type", carrera_entity_1.Carrera)
], Noticia.prototype, "carrera", void 0);
exports.Noticia = Noticia = __decorate([
    (0, typeorm_1.Entity)('noticias')
], Noticia);
//# sourceMappingURL=noticia.entity.js.map