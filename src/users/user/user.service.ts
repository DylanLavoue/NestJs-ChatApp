import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { User } from 'src/utils/typeorm';
import { CreateUserDetails, FindUserParams } from 'src/utils/types';
import { IUserService } from '../user';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { hashpassword } from 'src/utils/typeorm/helpers';

@Injectable()
export class UserService implements IUserService {

    constructor(
        @InjectRepository(User) private readonly userRepository : Repository<User> ){ }

    async createUser(userDetails : CreateUserDetails) {
        const existingUser = await this.userRepository.findOne({
            email : userDetails.email,})
            if (existingUser) throw new HttpException('User already exists', HttpStatus.CONFLICT);
        const password = await hashpassword(userDetails.password);
        //spare operator, unpack all values and replace password
        const newUser = this.userRepository.create({...userDetails, password });
        return this.userRepository.save(newUser)
    }

    async findUser( findUserParams: FindUserParams): Promise<User>{
        return this.userRepository.findOne(findUserParams)
        }
}


