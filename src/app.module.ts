import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Service } from './users/.service';
import { UserService } from './users/user/user.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import  { User } from './utils/typeorm';
import { PassportModule} from '@nestjs/passport';
import { ConversationsModule } from './conversations/conversations.module';
import { ParticipantsModule } from './participants/participants.module';
import { ParticipantsService } from './participants/participants.service';
import entities from './utils/typeorm'
import { ConversationService } from './conversations/conversation.service';


@Module({
  imports: [
  ConfigModule.forRoot({envFilePath: '.env.development'}), 
  PassportModule.register({ session : true}),
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
  ),
  ConversationsModule,
  ParticipantsModule
  ],
  controllers: [AppController],
  providers: [AppService, Service, UserService],
})
export class AppModule {}
