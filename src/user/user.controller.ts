import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import {Users} from '../constants/Users';
import { IUser } from '../models/IUser';
@Controller('User')
export class UserController {
  @Get('users')
  getUsers(@Req() req): IUser[] {
    return Users;
  }

  @Post('addUser')
  addUser(@Body() User: IUser): void {
    // console.log('the user obtained is', User);
    Users.push(User);
  }

  @Get('user/:id')
  getUser(@Param() params): IUser {
    const filteredUser = Users.filter(user => user.id == params.id);
    return filteredUser[0];
  }
}
