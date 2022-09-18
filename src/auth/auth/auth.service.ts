import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from 'src/users/user';
import { IAuthService } from './auth';

@Injectable()
export class AuthService implements IAuthService{
    

    constructor() {


    }
    validateUser() {
        throw new Error('Method not implemented.');
    }
}
