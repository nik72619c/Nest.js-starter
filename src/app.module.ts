import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {databaseProviders} from './providers/database.providers';
import {Book} from './models/book.model';
import {User} from './models/user.model';
import {UserController} from './user/user.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, ...databaseProviders, {
    provide: 'BOOKS',
    useValue: Book,
  }, {
    provide: 'USERS',
    useValue: User,
  }],
  exports: [...databaseProviders],
})
export class AppModule {}
