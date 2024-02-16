import { INestApplication } from '@nestjs/common';
import { SeedService } from './seeds/seed.service';

export async function seedBof(
  app: INestApplication,
): Promise<INestApplication> {
  const seedService = app.get<SeedService>(SeedService);
  console.log('Start bof seed');
  await seedService.seedBofData();
  console.log('End bof seed');

  return app;
}
