import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import connectPgSimple from 'connect-pg-simple';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';

import { AppModule } from './app.module';
import { VALLENTUNA_SURVEY_BACKEND_APP_SECRET, VALLENTUNA_SURVEY_BACKEND_NODE_ENV } from './core/constants/environment.const';

export function setup(app: INestApplication): INestApplication {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      enableDebugMessages: true,
      disableErrorMessages: false,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );

  app.use(cookieParser(VALLENTUNA_SURVEY_BACKEND_APP_SECRET));

  app.use(
    session({
      secret: VALLENTUNA_SURVEY_BACKEND_APP_SECRET as string,
      resave: false,
      saveUninitialized: false,
      store:
        VALLENTUNA_SURVEY_BACKEND_NODE_ENV === 'production'
          ? new (connectPgSimple(session))()
          : new session.MemoryStore(),
      cookie: {
        httpOnly: true,
        signed: true,
        sameSite: 'strict',
        secure: VALLENTUNA_SURVEY_BACKEND_NODE_ENV === 'production',
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.enableCors({
    origin: '*',
    credentials: true,
    exposedHeaders: ['Authorization'],
  });

  const options = new DocumentBuilder()
    .setTitle('Vallentuna Survey Tool API Documentation')
    .setDescription('This documentation is for Vallentuna Survey Tool')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  return app;
}
