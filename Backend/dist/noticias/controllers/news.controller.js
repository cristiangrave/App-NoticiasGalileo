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
exports.NoticiasController = void 0;
const common_1 = require("@nestjs/common");
const noticias_service_1 = require("../services/noticias.service");
const createNews_dto_1 = require("../dtos/createNews.dto");
const updateNews_dto_1 = require("../dtos/updateNews.dto");
const upload_service_1 = require("../services/upload.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let NoticiasController = class NoticiasController {
    constructor(noticiasService, uploadService) {
        this.noticiasService = noticiasService;
        this.uploadService = uploadService;
    }
    async findAll() {
        const noticias = await this.noticiasService.findAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Noticias Obtenidas Exitosamente',
            data: noticias,
        };
    }
    async findOne(id) {
        const noticia = await this.noticiasService.findOne(id);
        if (!noticia) {
            throw new common_1.NotFoundException(`No se encontró información para la Noticia con ID ${id}`);
        }
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Noticia obtenido exitosamente',
            data: noticia,
        };
    }
    async create(createNewsDto, file) {
        const hayImagen = this.uploadService.uploadImage(file);
        const noticia = await this.noticiasService.create({ ...createNewsDto, imagen: hayImagen });
        return {
            statusCode: common_1.HttpStatus.CREATED,
            message: 'Noticia creada exitosamente',
            data: noticia
        };
    }
    async updateNews(id, updateNewsDto, file) {
        let imagen;
        if (file) {
            imagen = this.uploadService.uploadImage(file);
        }
        const noticia = await this.noticiasService.update(id, { ...updateNewsDto, ...(imagen && { imagen }) });
        if (!noticia) {
            throw new common_1.NotFoundException(`No se encontró información para la Noticia con ID ${id}`);
        }
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Noticia actualziada exitosamente',
            data: noticia,
        };
    }
};
exports.NoticiasController = NoticiasController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagen', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                const fileExt = (0, path_1.extname)(file.originalname);
                cb(null, `${randomName}${fileExt}`);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
                return new Error('Formato de imagen Invalido');
            }
            else {
                return console.log('Formato de imagen valido');
            }
        }
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createNews_dto_1.CreateNewsDto, Object]),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagen', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => (Math.round(Math.random() * 16)).toString(16))
                    .join('');
                const fileExt = (0, path_1.extname)(file.originalname);
                cb(null, `${randomName}${fileExt}`);
            },
        })
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateNews_dto_1.UpdateNewsDto, Object]),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "updateNews", null);
exports.NoticiasController = NoticiasController = __decorate([
    (0, common_1.Controller)('noticiasEstudiantes'),
    __metadata("design:paramtypes", [noticias_service_1.NoticiaService,
        upload_service_1.UploadService])
], NoticiasController);
//# sourceMappingURL=news.controller.js.map