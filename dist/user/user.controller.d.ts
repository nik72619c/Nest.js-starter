import { IUser } from '../models/IUser';
export declare class UserController {
    getUsers(req: any): IUser[];
    addUser(User: IUser): void;
    getUser(params: any): IUser;
}
