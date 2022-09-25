import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserService } from './users/user.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import  { User } from './utils/typeorm';
import { PassportModule} from '@nestjs/passport';
import { ConversationsModule } from './conversations/conversations.module';
import { ParticipantsModule } from './participants/participants.module';
import { ParticipantsService } from './participants/participants.service';
import entities from './utils/typeorm'
import { ConversationService } from './conversations/conversation.service';
import 'reflect-metadata'

@Module({
  imports: [
  ConfigModule.forRoot({envFilePath: '.env'}), 
  PassportModule.register({ session : true}),
  TypeOrmModule.forFeature([User]),
  AuthModule,
  UsersModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host : process.env.MYSQL_DB_HOST,
    port: parseInt(process.env.MYSQL_DB_PORT),
    username: process.env.MYSQL_DB_USERNAME,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_DATABASE,
    synchronize : true,
    entities,
  } 
  ),
  ConversationsModule,
  ParticipantsModule
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
