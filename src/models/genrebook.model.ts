import {Table, Column, Model, PrimaryKey, HasMany, ForeignKey} from 'sequelize-typescript';
import {Book} from './book.model';
import {Genre} from './genre.model';

@Table
export class GenreBook extends Model<GenreBook> {
    @PrimaryKey
    @Column
    genreBookId: number;

    @HasMany(() => Book)
    books: Book[];

    @ForeignKey(() => Book)
    bookId: number;

    @ForeignKey(() => Genre)
    genreId: number;
}
