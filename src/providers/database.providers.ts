import { Sequelize } from 'sequelize-typescript';
import {Book} from '../models/book.model';
import {User} from '../models/user.model';
import {Genre} from '../models/genre.model';
import {GenreBook} from '../models/genrebook.model';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                storage: './data.db',
                dialect: 'sqlite',
            });
            sequelize.addModels([Book, User, Genre, GenreBook]);
            try {
                await sequelize.sync();
            } catch (e) {
            }
            return sequelize;
        },
    },
];
