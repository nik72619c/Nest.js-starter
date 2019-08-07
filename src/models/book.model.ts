import {Table, Column, Model, PrimaryKey, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {User} from './user.model';

@Table
export class Book extends Model<Book> {
    @PrimaryKey
    @Column
    bookId: number;

    @Column
    bookName: string;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => User)
    @Column
    userId: number;
}
