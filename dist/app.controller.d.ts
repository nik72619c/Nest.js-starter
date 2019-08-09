import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(): Promise<import("./models/user.model").User>;
    getUsers(): Promise<import("./models/user.model").User>;
}
