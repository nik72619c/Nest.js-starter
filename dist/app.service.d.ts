import { User } from './models/user.model';
export declare class AppService {
    private readonly user;
    constructor(user: typeof User);
    static createUser(): Promise<User>;
    static getUsers(): Promise<User>;
}
