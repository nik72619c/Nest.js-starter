import { Model } from 'sequelize-typescript';
import { Book } from './book.model';
export declare class GenreBook extends Model<GenreBook> {
    genreBookId: number;
    books: Book[];
    bookId: number;
    genreId: number;
}
