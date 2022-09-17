import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {PORT} = process.env;
  
  try {
    await app.listen('3001', () => console.log(`Running on Port ${PORT}`));
  } catch (error){
    console.log(error)
  }

}
bootstrap();
