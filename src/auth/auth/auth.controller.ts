import { Body, Controller, Get, Inject, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { Routes, Services } from 'src/utils/types';
import { IAuthService } from './auth';
import { CreateUserDto} from 'src/auth/auth/dto/CreateUserDto.dto'

@Controller(Routes.AUTH)
export class AuthController {

    constructor(
        @Inject(Services.AUTH) private authService: IAuthService,
        // @Inject(Services.USERS) private userService: IUserService
        )  {}

    @Post('register')
    @UsePipes(ValidationPipe)
    registerUser(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto);
    }

    @Post('login')
    login(){}

    @Get('status')
    status() {}

    @Post('logout')
    logout() {}
}
