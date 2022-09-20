import { Module } from '@nestjs/common';
import { AuthController } from 'src/auth/auth.controller';
import { Services } from 'src/utils/constants';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/utils/typeorm';


@Module({
    imports : [TypeOrmModule.forFeature([User]) ],
    controllers: [AuthController],
    providers: [
        {
            provide: Services.USERS,
            useClass : UserService,
        },
    ],  
    exports: [
        {
            provide : Services.USERS,
            useClass : UserService,
        }
    ]
})
export class UsersModule {}
