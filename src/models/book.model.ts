import {Table, Column, Model, PrimaryKey, ForeignKey, BelongsTo, BelongsToMany} from 'sequelize-typescript';
import {User} from './user.model';
import {Genre} from './genre.model';
import {GenreBook} from './genrebook.model';

@Table
export class Book extends Model<Book> {
    @PrimaryKey
    @Column
    bookId: number;

    @Column
    bookName: string;

    @BelongsTo(() => User)
    user: User;

    @BelongsToMany(() => Genre, () => GenreBook)
    genres: Genre[];

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Genre)
    genreId: number;

    @ForeignKey(() => GenreBook)
    genreBookId: number;
}
