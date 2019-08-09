"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const database_providers_1 = require("./providers/database.providers");
const book_model_1 = require("./models/book.model");
const user_model_1 = require("./models/user.model");
const user_controller_1 = require("./user/user.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [user_module_1.UserModule],
        controllers: [app_controller_1.AppController, user_controller_1.UserController],
        providers: [app_service_1.AppService, ...database_providers_1.databaseProviders, {
                provide: 'BOOKS',
                useValue: book_model_1.Book,
            }, {
                provide: 'USERS',
                useValue: user_model_1.User,
            }],
        exports: [...database_providers_1.databaseProviders],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map