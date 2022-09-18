import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth/auth.module';
import { UsersModule } from './users/users.module';
import { Service } from './users/.service';
import { UserService } from './users/user/user.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import entities, { User } from './utils/typeorm';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.env.development'}), 
  TypeOrmModule.forFeature([User]),
  AuthModule,
  UsersModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host : 'localhost',
    port: parseInt(process.env.MYSQL_DB_PORT),
    username: 'root',
    password: 'SchiftProject2022*',
    database: 'chatapp_db',
    synchronize : true,
    entities,

  }
    
  )
  ],
  controllers: [AppController],
  providers: [AppService, Service, UserService],
})
export class AppModule {}
