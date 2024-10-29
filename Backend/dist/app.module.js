"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const contacts_module_1 = require("./contacts/contacts.module");
const noticias_module_1 = require("./noticias/noticias.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, contacts_module_1.ContactsModule, noticias_module_1.NoticiasModule, typeorm_1.TypeOrmModule.forRoot({
                "type": "postgres",
                "host": "206.81.7.200",
                "port": 5434,
                "username": "admin",
                "password": "GalileoG32024",
                "database": "proyecto_galileo",
                "entities": [__dirname + '/../**/*.entity.js'],
                "synchronize": true
            })],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map