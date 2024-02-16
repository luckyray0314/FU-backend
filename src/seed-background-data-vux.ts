import { INestApplication } from '@nestjs/common';
import { SeedService } from './seeds/seed.service';

export async function seedBackgroundDataVux(
  app: INestApplication,
): Promise<INestApplication> {
  const seedService = app.get<SeedService>(SeedService);
  console.log('Start background data vux seed');
  await seedService.seedBackgroundDataVux();
  console.log('End background data vux seed');

  return app;
}
