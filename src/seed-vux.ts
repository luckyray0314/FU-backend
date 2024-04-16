import { INestApplication } from '@nestjs/common';
import { SeedVuxService } from './seeds/vux/seed-vux.service';

export async function seedVux(
  app: INestApplication,
): Promise<INestApplication> {
  const seedService = app.get<SeedVuxService>(SeedVuxService);

  /* console.log('Start clear data vux');
  await seedService.clearVuxData();
  console.log('End clear data vux'); */

  console.log('Start background data vux seed');
  await seedService.seedBackgroundDataVux();
  console.log('End background data vux seed');

  console.log('Start important event vux seed');
  await seedService.seedImportantEventVux();
  console.log('End important event vux seed');

  /* console.log('Start vux seed');
  await seedService.seedVuxData();
  console.log('End vux seed'); */

  return app;
}
