import { INestApplication } from '@nestjs/common';
import { SeedService } from './seeds/seed.service';

export async function seedFollowUp(
  app: INestApplication,
): Promise<INestApplication> {
  const seedService = app.get<SeedService>(SeedService);
  console.log('Start follow up seed');
  await seedService.seedFollowUpData();
  console.log('End follow up seed');

  return app;
}
