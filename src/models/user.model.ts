import {Table, Column, Model, PrimaryKey, HasMany} from 'sequelize-typescript';
import {Book} from './book.model';

@Table
export class User extends Model<User> {
    @PrimaryKey
    @Column
    userId: number;

    @Column
    userName: string;

    @HasMany(() => Book)
    books: Book[];
}
