import 'reflect-metadata'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport'
import { ValidationPipe} from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { TypeormStore } from 'connect-typeorm/out'
import {  Session } from './utils/typeorm';
import { getRepository } from 'typeorm'



async function bootstrap() {
  const {PORT, COOKIE_SECRET } = process.env;
  const app = await NestFactory.create(AppModule);
  const sessionRepository = getRepository(Session);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  app.use(session({
    secret : 'COOKIE_SECRET',
    saveUninitialized : false,
    resave: false,
    cookie: {
      maxAge: 86400000, // cookie expires in 1 day later 
    },
    store : new TypeormStore().connect(sessionRepository),
  }))


  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await app.listen( '3001', () => console.log(`Running on Port ${PORT}`));
  } catch (error){
    console.log(error)
  }

}
bootstrap();
