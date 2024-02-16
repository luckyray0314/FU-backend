import { INestApplication } from '@nestjs/common';
import { SeedService } from './seeds/seed.service';

export async function seedImportantEventBof(
  app: INestApplication,
): Promise<INestApplication> {
  const seedService = app.get<SeedService>(SeedService);
  console.log('Start important event bof seed');
  await seedService.seedImportantEventBof();
  console.log('End important event bof seed');

  return app;
}
