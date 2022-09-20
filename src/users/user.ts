import { User } from "src/utils/typeorm";
import { CreateUserDetails, FindUserParams } from "src/utils/types";

export interface IUserService {
    createUser(userDetails: CreateUserDetails);
    findUser(findUserParams: FindUserParams): Promise<User>;
}