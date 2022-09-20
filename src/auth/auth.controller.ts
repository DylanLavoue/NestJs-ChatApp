import { Body, Controller, Get, Inject, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './auth';
import { CreateUserDto} from 'src/auth/dto/CreateUserDto.dto'
import { IUserService } from 'src/users/user';
import { CreateUserDetails } from 'src/utils/types';
import { instanceToPlain } from 'class-transformer';
import { UserLoginDto } from './dto/UserLogin.dto';
import { LocalAuthGuard } from './utils/Guards';

@Controller(Routes.AUTH)
export class AuthController {

    constructor(
        // @Inject(Services.AUTH) private authService: IAuthService,
        @Inject(Services.USERS) private userService: IUserService,
        )  {}

    @Post('register')
   async registerUser(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto);
       return instanceToPlain(await this.userService.createUser(createUserDto)) ;
   
    }

    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Body() userLoginDto: UserLoginDto){}

    @Get('status')
    status() {}

    @Post('logout')
    logout() {}
}
