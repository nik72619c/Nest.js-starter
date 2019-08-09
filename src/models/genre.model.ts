import {Table, Column, Model, PrimaryKey, HasMany, BelongsToMany} from 'sequelize-typescript';
import {Book} from './book.model';
import {GenreBook} from './genrebook.model';

@Table
export class Genre extends Model<Genre> {
    @PrimaryKey
    @Column
    genreId: number;

    @Column
    genreName: string;

    // @BelongsToMany(() => Book, () => GenreBook)
    // book: Book[];

    @BelongsToMany(() => Book, () => GenreBook)
    books: Book[];
}
