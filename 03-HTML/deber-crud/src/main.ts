import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as httpserver from 'http-server';
import * as cookieParser from 'cookie-parser';
import * as ejs from 'ejs';

console.log(httpserver);


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser(
        'Hola David',
        {

        }
    ));

    app.set('view engine', 'ejs');


    await app.listen(3000);
}
bootstrap();
