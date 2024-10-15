"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticiaService = void 0;
const common_1 = require("@nestjs/common");
let NoticiaService = class NoticiaService {
    constructor() {
        this.noticias = [
            {
                id: 1,
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.',
                carrera: 'Ingenieria En Sistemas',
                imagen: 'imagen-noticia.png',
                fecha: '14 de Octubre de 2024',
            },
            {
                id: 2,
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.',
                carrera: 'Ingenieria en Redes Computacionales',
                imagen: 'imagen-noticia.png',
                fecha: '14 de Octubre de 2024',
            },
            {
                id: 3,
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.',
                carrera: 'Ingenieria en Ciberseguridad',
                imagen: 'imagen-noticia.png',
                fecha: '14 de Octubre de 2024',
            },
            {
                id: 4,
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium eius at enim corporis rerum quae aspernatur placeat dolores! Iure quaerat autem vel veniam animi culpa at est voluptatibus debitis.',
                carrera: 'Ingenieria en Redes',
                imagen: 'imagen-noticia.png',
                fecha: '14 de Octubre de 2024',
            },
        ];
    }
    findAll() {
        return this.noticias;
    }
    findOne(id) {
        return this.noticias.find((contact) => contact.id === id);
    }
};
exports.NoticiaService = NoticiaService;
exports.NoticiaService = NoticiaService = __decorate([
    (0, common_1.Injectable)()
], NoticiaService);
//# sourceMappingURL=noticias.service.js.map