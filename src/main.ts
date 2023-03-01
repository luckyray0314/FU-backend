import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { SeedService } from './seeds/seed.service';
import { setup } from './setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setup(app);

  const seedService = app.get<SeedService>(SeedService);
  await seedService.seedGenders();

  await app.listen(process.env.VALLENTUNA_SURVEY_BACKEND_PORT || 5000);
}
bootstrap();
