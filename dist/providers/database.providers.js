"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const book_model_1 = require("../models/book.model");
const user_model_1 = require("../models/user.model");
const genre_model_1 = require("../models/genre.model");
const genrebook_model_1 = require("../models/genrebook.model");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                storage: './data.db',
                dialect: 'sqlite',
            });
            sequelize.addModels([book_model_1.Book, user_model_1.User, genre_model_1.Genre, genrebook_model_1.GenreBook]);
            try {
                await sequelize.sync();
            }
            catch (e) {
            }
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map