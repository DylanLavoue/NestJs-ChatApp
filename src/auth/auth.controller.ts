import { Body, Controller, Get, HttpStatus, Inject, Post, Req, Res, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './auth';
import { CreateUserDto} from 'src/auth/dto/CreateUserDto.dto'
import { IUserService } from 'src/users/user';
import { CreateUserDetails } from 'src/utils/types';
import { instanceToPlain } from 'class-transformer';
import { UserLoginDto } from './dto/UserLogin.dto';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/Guards';
import { Request, Response } from 'express';

@Controller(Routes.AUTH)
export class AuthController {

    constructor(
        @Inject(Services.AUTH) private authService: IAuthService,
        @Inject(Services.USERS) private userService: IUserService,
        )  {}

    @Post('register')
   async registerUser(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto);
       return instanceToPlain(await this.userService.createUser(createUserDto)) ;
   
    }

    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Res() res: Response){
    return res.sendStatus(HttpStatus.OK)
    }

    @Get('status')
    @UseGuards(AuthenticatedGuard)
    status(@Req() req : Request, @Res() res : Response ){
        res.send(req.user)
    }

    @Post('logout')
    logout() {}
}
