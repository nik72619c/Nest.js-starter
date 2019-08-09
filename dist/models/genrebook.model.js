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
const book_model_1 = require("./book.model");
const genre_model_1 = require("./genre.model");
let GenreBook = class GenreBook extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], GenreBook.prototype, "genreBookId", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => book_model_1.Book),
    __metadata("design:type", Array)
], GenreBook.prototype, "books", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => book_model_1.Book),
    __metadata("design:type", Number)
], GenreBook.prototype, "bookId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => genre_model_1.Genre),
    __metadata("design:type", Number)
], GenreBook.prototype, "genreId", void 0);
GenreBook = __decorate([
    sequelize_typescript_1.Table
], GenreBook);
exports.GenreBook = GenreBook;
//# sourceMappingURL=genrebook.model.js.map