import 'reflect-metadata'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const {PORT, COOKIE_SECRET } = process.env;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  app.use(session({
    secret : 'COOKIE_SECRET',
    saveUninitialized : false,
    resave: false,
    cookie: {
      maxAge: 86400000, // cookie expires in 1 day later 
    }
  }))

  try {
    await app.listen( '3001', () => console.log(`Running on Port ${PORT}`));
  } catch (error){
    console.log(error)
  }

}
bootstrap();
