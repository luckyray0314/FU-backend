import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { setup } from './setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: {
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allow all HTTP methods
  }});

  setup(app);

  await app.listen(process.env.VALLENTUNA_SURVEY_BACKEND_PORT || 5000);
}
bootstrap();
