import {Controller, Get, Post} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('createUser')
  async createUser() {
    return await AppService.createUser();
  }

@Get('getUsers')
async getUsers() {
    return AppService.getUsers();
  }
}
