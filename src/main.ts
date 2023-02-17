import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as connectPgSimple from 'connect-pg-simple';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //     whitelist: true,
  //     errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  //   }),
  // );

  // app.use(cookieParser(process.env.VALLENTUNA_SURVEY_BACKEND_APP_SECRET));

  // app.use(
  //   session({
  //     secret: process.env.VALLENTUNA_SURVEY_BACKEND_APP_SECRET as string,
  //     resave: false,
  //     saveUninitialized: false,
  //     store:
  //       process.env.VALLENTUNA_SURVEY_BACKEND_NODE_ENV === 'production'
  //         ? new (connectPgSimple(session))()
  //         : new session.MemoryStore(),
  //     cookie: {
  //       httpOnly: true,
  //       signed: true,
  //       sameSite: 'strict',
  //       secure: process.env.VALLENTUNA_SURVEY_BACKEND_NODE_ENV === 'production',
  //     },
  //   }),
  // );



  // app.use(passport.initialize());
  // app.use(passport.session());

  // app.enableCors({origin: true});

  // const options = new DocumentBuilder()
  //   .setTitle('Vallentuna Survey Tool API Documentation')
  //   .setDescription('This documentation is for Vallentuna Survey Tool')
  //   .setVersion('1.0')
  //   .addBearerAuth()
  //   .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('doc', app, document);

  // useContainer(app.select(AppModule), { fallbackOnErrors: true });


  await app.listen(process.env.VALLENTUNA_SURVEY_BACKEND_PORT || 5000);
}
bootstrap();
