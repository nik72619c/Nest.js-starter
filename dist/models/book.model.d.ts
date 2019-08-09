import { Model } from 'sequelize-typescript';
import { User } from './user.model';
import { Genre } from './genre.model';
export declare class Book extends Model<Book> {
    bookId: number;
    bookName: string;
    user: User;
    genres: Genre[];
    userId: number;
    genreId: number;
    genreBookId: number;
}
