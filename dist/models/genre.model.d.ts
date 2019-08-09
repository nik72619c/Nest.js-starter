import { Model } from 'sequelize-typescript';
import { Book } from './book.model';
export declare class Genre extends Model<Genre> {
    genreId: number;
    genreName: string;
    books: Book[];
}
