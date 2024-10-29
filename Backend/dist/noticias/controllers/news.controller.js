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
const createNews_dto_1 = require("./createNews.dto");
const updateNews_dto_1 = require("./updateNews.dto");
let NoticiasController = class NoticiasController {
    constructor(noticiasService) {
        this.noticiasService = noticiasService;
    }
    findAll() {
        const noticias = this.noticiasService.findAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Noticias Obtenidas Exitosamente',
            data: noticias,
        };
    }
    findOne(id) {
        const noticia = this.noticiasService.findOne(+id);
        if (!noticia) {
            throw new common_1.NotFoundException(`No se encontró información para la Noticia con ID ${id}`);
        }
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Noticia obtenido exitosamente',
            data: noticia,
        };
    }
    create(createNewsDto) {
        return this.noticiasService.create(createNewsDto);
    }
    updateNews(id, updateNewsDto) {
        return this.noticiasService.update(id, updateNewsDto);
    }
};
exports.NoticiasController = NoticiasController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], NoticiasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], NoticiasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createNews_dto_1.CreateNewsDto]),
    __metadata("design:returntype", void 0)
], NoticiasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateNews_dto_1.UpdateNewsDto]),
    __metadata("design:returntype", void 0)
], NoticiasController.prototype, "updateNews", null);
exports.NoticiasController = NoticiasController = __decorate([
    (0, common_1.Controller)('noticiasEstudiantes'),
    __metadata("design:paramtypes", [noticias_service_1.NoticiaService])
], NoticiasController);
//# sourceMappingURL=news.controller.js.map