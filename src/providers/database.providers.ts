import { Sequelize } from 'sequelize-typescript';
import {Book} from '../models/book.model';
import {User} from '../models/user.model';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                storage: './data.db',
                dialect: 'sqlite',
            });
            sequelize.addModels([Book, User]);
            try {
                await sequelize.sync();
            } catch (e) {
            }
            return sequelize;
        },
    },
];
