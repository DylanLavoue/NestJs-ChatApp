import { Module } from '@nestjs/common';
import { AuthController } from 'src/auth/auth.controller';
import { Services } from 'src/utils/constants';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/utils/typeorm';
import { AuthModule } from 'src/auth/auth.module';


@Module({
    imports : [
        TypeOrmModule.forFeature([User]) ],
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
