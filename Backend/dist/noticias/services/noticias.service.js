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
exports.Noticia = exports.NoticiaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const noticia_entity_1 = require("../entities/noticia.entity");
Object.defineProperty(exports, "Noticia", { enumerable: true, get: function () { return noticia_entity_1.Noticia; } });
const typeorm_2 = require("typeorm");
const categoria_entity_1 = require("../entities/categoria.entity");
const carrera_entity_1 = require("../../carreras/entities/carrera.entity");
let NoticiaService = class NoticiaService {
    constructor(noticiaRepository, categoriaRepository, carreraRepository) {
        this.noticiaRepository = noticiaRepository;
        this.categoriaRepository = categoriaRepository;
        this.carreraRepository = carreraRepository;
    }
    async findAll() {
        return this.noticiaRepository.find();
    }
    async findOne(idnoticia) {
        const noticia = await this.noticiaRepository.findOne({
            where: { idnoticia },
        });
        if (!noticia) {
            throw new common_1.NotFoundException(`Noticia con ID ${idnoticia} no encontrada`);
        }
        return noticia;
    }
    async create(createNewsDto) {
        const categoria = await this.categoriaRepository.findOne({ where: { idcategoria: createNewsDto.categoria } });
        const carrera = await this.carreraRepository.findOne({ where: { idcarrera: createNewsDto.carrera } });
        if (!categoria) {
            throw new common_1.NotFoundException(`Categoria con ID ${createNewsDto.categoria} no encontrada`);
        }
        if (!carrera) {
            throw new common_1.NotFoundException(`Carrera con ID ${createNewsDto.carrera} no encontrada`);
        }
        const newNews = this.noticiaRepository.create({
            ...createNewsDto, categoria: [categoria], carrera: carrera
        });
        return this.noticiaRepository.save(newNews);
    }
    async update(idnoticia, updateNewsDto) {
        const editNew = await this.findOne(idnoticia);
        if (!editNew) {
            throw new common_1.NotFoundException(`Noticia con ID ${idnoticia} no encontrada`);
        }
        if (updateNewsDto.categoria) {
            const categoria = await this.categoriaRepository.findOne({ where: { idcategoria: updateNewsDto.categoria } });
            if (!categoria) {
                throw new common_1.NotFoundException(`Categoria con ID ${updateNewsDto.categoria} no encontrada`);
            }
            editNew.categoria = [categoria];
        }
        if (updateNewsDto.carrera) {
            const carrera = await this.carreraRepository.findOne({ where: { idcarrera: updateNewsDto.carrera } });
            if (!carrera) {
                throw new common_1.NotFoundException(`Carrera con ID ${updateNewsDto.carrera} no encontrada`);
            }
            editNew.carrera = carrera;
        }
        Object.assign(editNew, updateNewsDto);
        return await this.noticiaRepository.save(editNew);
    }
};
exports.NoticiaService = NoticiaService;
exports.NoticiaService = NoticiaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(noticia_entity_1.Noticia)),
    __param(1, (0, typeorm_1.InjectRepository)(categoria_entity_1.Categoria)),
    __param(2, (0, typeorm_1.InjectRepository)(carrera_entity_1.Carrera)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], NoticiaService);
//# sourceMappingURL=noticias.service.js.map