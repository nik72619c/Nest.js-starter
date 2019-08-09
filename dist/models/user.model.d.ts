import { Model } from 'sequelize-typescript';
import { Book } from './book.model';
export declare class User extends Model<User> {
    userId: number;
    userName: string;
    books: Book[];
}
