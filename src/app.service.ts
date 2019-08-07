import {Inject, Injectable} from '@nestjs/common';
import {User} from './models/user.model';
import {Book} from './models/book.model';

@Injectable()
export class AppService {

  constructor(@Inject('USERS') private readonly user: typeof User) {

  }

  static async createUser() {
    return await User.create({
      userId: 1,
      userName: 'user 1',
      books: [
        {
          bookId: 1,
          bookName: 'nice property',
        },
      ],
    }, {
      include: [ Book],
    });
  }

  static async getUsers(): Promise<User> {
      return await User.findOne({include: [Book]});
  }
}
