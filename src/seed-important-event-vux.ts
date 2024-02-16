import { INestApplication } from '@nestjs/common';
import { SeedService } from './seeds/seed.service';

export async function seedImportantEventVux(
  app: INestApplication,
): Promise<INestApplication> {
  const seedService = app.get<SeedService>(SeedService);
  console.log('Start important event vux seed');
  await seedService.seedImportantEventVux();
  console.log('End important event vux seed');

  return app;
}
