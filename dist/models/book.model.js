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
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
const genre_model_1 = require("./genre.model");
const genrebook_model_1 = require("./genrebook.model");
let Book = class Book extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Book.prototype, "bookId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Book.prototype, "bookName", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Book.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => genre_model_1.Genre, () => genrebook_model_1.GenreBook),
    __metadata("design:type", Array)
], Book.prototype, "genres", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Book.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => genre_model_1.Genre),
    __metadata("design:type", Number)
], Book.prototype, "genreId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => genrebook_model_1.GenreBook),
    __metadata("design:type", Number)
], Book.prototype, "genreBookId", void 0);
Book = __decorate([
    sequelize_typescript_1.Table
], Book);
exports.Book = Book;
//# sourceMappingURL=book.model.js.map