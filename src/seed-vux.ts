import { INestApplication } from '@nestjs/common';
import { SeedService } from './seeds/seed.service';

export async function seedVux(app: INestApplication): Promise<INestApplication> {
  const seedService = app.get<SeedService>(SeedService);
  console.log('Start vux seed');
  await seedService.seedVuxData();
  console.log('End vux seed');

  return app;
}
