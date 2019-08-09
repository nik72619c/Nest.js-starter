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
const common_1 = require("@nestjs/common");
const user_model_1 = require("./models/user.model");
const book_model_1 = require("./models/book.model");
let AppService = class AppService {
    constructor(user) {
        this.user = user;
    }
    static async createUser() {
        return await user_model_1.User.create({
            userId: 1,
            userName: 'user 1',
            books: [
                {
                    bookId: 1,
                    bookName: 'nice property',
                },
            ],
        }, {
            include: [book_model_1.Book],
        });
    }
    static async getUsers() {
        return await user_model_1.User.findOne({ include: [book_model_1.Book] });
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('USERS')),
    __metadata("design:paramtypes", [Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map